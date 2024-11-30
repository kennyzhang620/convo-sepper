import hashlib
import time
import requests
import numpy as np
import pandas as pd
from io import StringIO

def reset():
   url = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-logs-reset"
   response = requests.get(url)
   return

def send_advice(data):
   url = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts"
   response = requests.post(url, json=data)
   return response.json()

maxWidth = 5;
scale = 1/50;

def encodeXY(x,y):
   return y*maxWidth + x;

def make_data(id, x, y, theta, transcriptWords, paused):
   import datetime
   now = datetime.datetime.now()
   iso_time = now.strftime("%Y-%m-%dT%H:%M:%SZ") 

   return {"id": id, "px": x, "py": y, "theta": theta, "cxy": encodeXY(x, y), "timestamp": iso_time, "transcript": transcriptWords, "paused": paused};


T1 = {
  "conversation": [
    {"speaker": "A", "message": "Did you catch the Maple Leafs vs. Panthers game? What a thriller!"},
    {"speaker": "B", "message": "Absolutely! Joseph Woll was incredible with 38 saves. His shootout performance was clutch."},
    {"speaker": "A", "message": "Yeah, especially after that wild moment when Rodrigues' goal was disallowed."},
    {"speaker": "B", "message": "Right? I’ve never seen a double-tap disqualification like that before! Huge for Toronto."},
    {"speaker": "A", "message": "Noah Gregor’s first shootout goal was perfect timing."},
    {"speaker": "B", "message": "Big moment for him! And they’ve had quite a few comeback wins recently."},
    {"speaker": "A", "message": "True, but the Panthers didn’t back down. Stenlund’s goal gave them an early lead."},
    {"speaker": "B", "message": "Stolarz also held strong in net for Florida, with 31 saves."},
    {"speaker": "A", "message": "What about that Devils game? Hischier’s hat trick was something else."},
    {"speaker": "B", "message": "His first NHL hat trick! And all in the second period—a natural hat trick too."},
    {"speaker": "A", "message": "It must’ve been great for the Devils' morale, especially after that goal drought."},
    {"speaker": "B", "message": "Exactly. Nashville just couldn’t keep up after Hischier turned it on."},
    {"speaker": "A", "message": "Juuse Saros had a rough night—pulled after four goals."},
    {"speaker": "B", "message": "He wasn’t the only one, though. Their defense was outpaced by New Jersey’s speed."},
    {"speaker": "A", "message": "Forsberg’s opening goal gave Nashville some hope early on."},
    {"speaker": "B", "message": "Yeah, but the Devils took control after that, especially on the power play."},
    {"speaker": "A", "message": "Did you notice how sharp Kovacevic was? Two assists and steady play."},
    {"speaker": "B", "message": "Totally, and L’Heureux’s backhand goal was a nice highlight for Nashville."},
    {"speaker": "A", "message": "Though it didn’t help much. Consistency is an issue for the Predators."},
    {"speaker": "B", "message": "Their power play struggles didn’t help—0 for 5 on the night."},
    {"speaker": "A", "message": "Meanwhile, New Jersey capitalized on those opportunities."},
    {"speaker": "B", "message": "Exactly. Hischier really found his groove."},
    {"speaker": "A", "message": "And Erik Haula was solid with that tying goal in the first."},
    {"speaker": "B", "message": "The Devils are just on a roll—eight wins in their last ten games."},
    {"speaker": "A", "message": "Nashville’s inconsistency is frustrating. They need to string wins together."},
    {"speaker": "B", "message": "They definitely need to improve if they want to stay competitive."},
    {"speaker": "A", "message": "Well, it’ll be interesting to see how both teams adjust in the next games."},
    {"speaker": "B", "message": "No doubt. Looking forward to seeing if the Leafs can build on that momentum."},
    {"speaker": "A", "message": "And if the Devils can keep this hot streak alive."},
    {"speaker": "B", "message": "It’s going to be a fascinating week in hockey, that’s for sure."},
    {"speaker": "A", "message": "No question. Hockey this season has been unpredictable and exciting!"}
  ]
}

T2 = {
  "conversation": [
    {"speaker": "A", "message": "AI is transforming our world, but it brings serious ethical challenges too."},
    {"speaker": "B", "message": "Absolutely, privacy is a major concern. AI systems often collect vast amounts of personal data."},
    {"speaker": "A", "message": "Right, like how companies use AI to track user behavior, which can feel invasive."},
    {"speaker": "B", "message": "And there’s the issue of data security. AI can be a target for cyberattacks, risking sensitive information."},
    {"speaker": "A", "message": "Another big problem is bias in AI datasets. If the data is flawed, the AI’s decisions will be too."},
    {"speaker": "B", "message": "Exactly. AI can unintentionally reinforce societal biases, like in hiring algorithms or facial recognition."},
    {"speaker": "A", "message": "Remember the case where facial recognition wrongly identified people of color as suspects?"},
    {"speaker": "B", "message": "Yes, it highlights how AI can perpetuate discrimination if not carefully designed and monitored."},
    {"speaker": "A", "message": "Bias isn’t the only issue. Intellectual property rights are murky too, especially with AI-generated content."},
    {"speaker": "B", "message": "Like when AI creates art or music—who owns it? The developer, the user, or the AI itself?"},
    {"speaker": "A", "message": "Exactly. It’s an evolving legal area with no clear answers yet."},
    {"speaker": "B", "message": "There’s also the ethical dilemma of job displacement. Automation is replacing human labor in many sectors."},
    {"speaker": "A", "message": "True, but it’s not just about losing jobs. It’s about creating new roles and reskilling the workforce too."},
    {"speaker": "B", "message": "Still, the transition can be painful for workers who lack access to new training opportunities."},
    {"speaker": "A", "message": "That’s where governments and companies need to step up with policies and programs to support workers."},
    {"speaker": "B", "message": "Agreed. Then there’s the issue of human reliance on AI—what if we trust it too much?"},
    {"speaker": "A", "message": "Over-reliance can be dangerous. Remember the case where AI misdiagnosed a medical condition?"},
    {"speaker": "B", "message": "Yes, and the doctor trusted the AI over their own expertise, leading to a serious mistake."},
    {"speaker": "A", "message": "It shows that AI should support human decision-making, not replace it entirely."},
    {"speaker": "B", "message": "That’s why transparency in AI decision-making is crucial. People need to understand how decisions are made."},
    {"speaker": "A", "message": "Agreed, but many AI systems are black boxes, even to their developers."},
    {"speaker": "B", "message": "Explainability is a tough challenge, but it’s essential for building trust in AI."},
    {"speaker": "A", "message": "Then there’s the existential debate: Could AI ever surpass human control?"},
    {"speaker": "B", "message": "The ‘AI singularity’ is a popular topic in sci-fi, but some experts take it seriously as a potential future risk."},
    {"speaker": "A", "message": "Even if that’s far off, there are immediate concerns about how AI could be weaponized."},
    {"speaker": "B", "message": "Yes, autonomous weapons and cyber warfare are real threats that need strict regulation."},
    {"speaker": "A", "message": "The international community is starting to discuss AI governance, but it’s slow progress."},
    {"speaker": "B", "message": "Coordination is tough, especially when countries have competing interests in AI development."},
    {"speaker": "A", "message": "True, but without collaboration, the risks will be much harder to control."},
    {"speaker": "B", "message": "We also have to consider the environmental impact. AI requires enormous computational resources."},
    {"speaker": "A", "message": "Training large AI models consumes vast amounts of energy, contributing to carbon emissions."},
    {"speaker": "B", "message": "There’s growing interest in developing more energy-efficient algorithms to tackle this issue."},
    {"speaker": "A", "message": "That’s promising. Sustainable AI should be a priority as the technology advances."},
    {"speaker": "B", "message": "One more issue: misinformation. AI can create deepfakes and spread fake news."},
    {"speaker": "A", "message": "Deepfakes are especially concerning because they can erode trust in media and even democracy."},
    {"speaker": "B", "message": "AI companies are working on detection tools, but it’s a constant arms race."},
    {"speaker": "A", "message": "So, what’s the solution? Regulation, ethics, public awareness—all of the above?"},
    {"speaker": "B", "message": "Probably all of the above. It will take a multi-stakeholder effort to ensure AI is used responsibly."},
    {"speaker": "A", "message": "It’s exciting but also a bit daunting. The future of AI holds both promise and peril."},
    {"speaker": "B", "message": "Indeed, and it’s up to us to guide it toward a path that benefits humanity as a whole."}
  ]
}

T3 = {
  "conversation": [
    {"speaker": "A", "message": "I think oranges are better than apples. They’re juicy, refreshing, and full of vitamin C."},
    {"speaker": "B", "message": "Apples are more versatile though. You can eat them fresh, bake them, or even turn them into cider."},
    {"speaker": "A", "message": "But oranges give you that instant burst of hydration. Plus, they’re great for boosting your immune system."},
    {"speaker": "B", "message": "Apples have fiber, which helps with digestion. An apple a day keeps the doctor away, right?"},
    {"speaker": "A", "message": "True, but peeling an orange is half the fun! And the scent is so invigorating."},
    {"speaker": "B", "message": "Apples are more convenient though—no peeling required. Just grab one and go."},
    {"speaker": "A", "message": "Oranges have such a vibrant color and sweetness. They feel more like a treat."},
    {"speaker": "B", "message": "Apples come in so many varieties: sweet, tart, crisp. There’s an apple for every taste."},
    {"speaker": "A", "message": "Sure, but have you ever had fresh-squeezed orange juice? It’s unbeatable."},
    {"speaker": "B", "message": "Apple juice is just as delicious, and you can even make apple cider for something warm."},
    {"speaker": "A", "message": "Oranges are a great source of potassium too, which is essential for muscle function."},
    {"speaker": "B", "message": "Apples contain antioxidants like quercetin, which is good for heart health."},
    {"speaker": "A", "message": "Oranges are better for fighting colds with all that vitamin C."},
    {"speaker": "B", "message": "But apples have pectin, which helps regulate blood sugar levels."},
    {"speaker": "A", "message": "Ever notice how oranges brighten your mood? Their aroma is a natural mood booster."},
    {"speaker": "B", "message": "Apples can do that too, especially with a crunch that’s so satisfying."},
    {"speaker": "A", "message": "Oranges are often associated with tropical climates. Eating one feels like a mini vacation."},
    {"speaker": "B", "message": "Apples, on the other hand, are perfect for fall and bring a sense of comfort."},
    {"speaker": "A", "message": "Orange zest can enhance desserts and dishes. It’s so versatile in cooking."},
    {"speaker": "B", "message": "But think of apple pie—there’s nothing more classic or comforting."},
    {"speaker": "A", "message": "Oranges are packed with hydration, making them perfect for hot days."},
    {"speaker": "B", "message": "Apples last longer in storage. You can keep them fresh for weeks."},
    {"speaker": "A", "message": "Oranges have that natural division into segments, making them easy to share."},
    {"speaker": "B", "message": "But apples have a long history in mythology and literature—think of the forbidden fruit."},
    {"speaker": "A", "message": "Oranges are often used as a symbol of sunshine and energy."},
    {"speaker": "B", "message": "Apples symbolize knowledge and temptation, adding a layer of cultural depth."},
    {"speaker": "A", "message": "Oranges can be turned into marmalade. Sweet and slightly bitter—it’s unique."},
    {"speaker": "B", "message": "Applesauce is versatile too, and it can even be used as a healthy baking substitute."},
    {"speaker": "A", "message": "Oranges have a higher concentration of vitamin C than most apples."},
    {"speaker": "B", "message": "But apples have a broader range of phytonutrients beneficial for overall health."},
    {"speaker": "A", "message": "Peeling an orange feels rewarding and therapeutic."},
    {"speaker": "B", "message": "Biting into a crisp apple is equally satisfying with that crunch."},
    {"speaker": "A", "message": "Oranges remind me of summer and warm weather."},
    {"speaker": "B", "message": "Apples bring to mind cool autumn days and cozy moments."},
    {"speaker": "A", "message": "You can also use orange peel as a natural air freshener."},
    {"speaker": "B", "message": "Apples can scent a room too, especially when baked with cinnamon."},
    {"speaker": "A", "message": "Oranges are used in both sweet and savory dishes worldwide."},
    {"speaker": "B", "message": "So are apples! Think of pork with apples or apple salads."},
    {"speaker": "A", "message": "Oranges contain folate, which is important for cell health."},
    {"speaker": "B", "message": "Apples have vitamin C too, just not as much as oranges."},
    {"speaker": "A", "message": "Oranges are ideal for making refreshing smoothies."},
    {"speaker": "B", "message": "Apples make great smoothies too, especially when combined with cinnamon or berries."},
    {"speaker": "A", "message": "You can use oranges to make candied peel for desserts."},
    {"speaker": "B", "message": "Apples are perfect for making dried apple chips as a healthy snack."},
    {"speaker": "A", "message": "Oranges have that tangy-sweet flavor that’s irresistible."},
    {"speaker": "B", "message": "Apples’ balance of sweet and tart flavors is just as irresistible."},
    {"speaker": "A", "message": "Oranges win in terms of juiciness, hands down."},
    {"speaker": "B", "message": "But apples win when it comes to variety and versatility."}
  ]
}


reset()

while (True):
   print(send_advice(make_data(0, 0, 0, 0, "", False)))
   print(send_advice(make_data(1, 0, 0, 0, "", False)))
   print(send_advice(make_data(2, 0, 0, 0, "", False)))
   print(send_advice(make_data(3, 0, 0, 0, "", False)))
   time.sleep(0.1)

   print(send_advice(make_data(0, 0.2, 0, 90, "", False)))
   print(send_advice(make_data(1, 0.1, 0, 90, "", False)))
   print(send_advice(make_data(2, -0.2, 0, 90, "", False)))
   print(send_advice(make_data(3, -0.1, 0, 90, "", False)))
   time.sleep(0.1)
   print(send_advice(make_data(0, 0.4, 0, 90, "", False)))
   print(send_advice(make_data(1, 0.2, 0, 90, "", False)))
   print(send_advice(make_data(2, -0.4, 0, 90, "", False)))
   print(send_advice(make_data(3, -0.2, 0, 90, "", False)))
   time.sleep(0.1)
   print(send_advice(make_data(0, 0.8, 0, 90, "", False)))
   print(send_advice(make_data(1, 0.6, 0, 90, "", False)))
   print(send_advice(make_data(2, -0.8, 0, -90, "", False)))
   print(send_advice(make_data(3, -0.6, 0, -90, "", False)))
   time.sleep(0.1)
   print(send_advice(make_data(0, 1.4, 0.25, 90, "", False)))
   print(send_advice(make_data(1, 1.2, 0.1, 90, "", False)))
   print(send_advice(make_data(2, -1.4, -0.25, -90, "", False)))
   print(send_advice(make_data(3, -1.2, -0.1, -90, "", False)))
   time.sleep(0.1)
   print(send_advice(make_data(0, 2.4, 1, 270, "", False)))
   print(send_advice(make_data(1, 2.0, 1, 90, "", False)))
   print(send_advice(make_data(2, -2.4, -0.25, -270, "", False)))
   print(send_advice(make_data(3, -2.2, -0.1, -90, "", False)))

   print(send_advice(make_data(4, 0, 0, 0, "", False)))
   time.sleep(0.1)

   assert len(T2) == len(T3)

   for i in range(len(T2['conversation'])):
      print(i)
      if T2['conversation'][i]['speaker'] == "A":
         if i > 13 and i < 17:
            print(send_advice(make_data(0, 2.4, 1, 270, "", True)))
            #print(send_advice(make_data(1, 2.0, 1, 90, "", False)))
            print(send_advice(make_data(2, -2.4, -0.25, -270, "", False)))
         else:
            print(send_advice(make_data(0, 2.4, 1, 270, T2['conversation'][i]['message'], False)))
               #print(send_advice(make_data(1, 2.0, 1, 90, "", False)))
            print(send_advice(make_data(2, -2.4, -0.25, -270, T3['conversation'][i]['message'], False)))
            #print(send_advice(make_data(3, -2.2, -0.1, -90, "", False)))
      else:
         #  print(send_advice(make_data(0, 2.4, 1, 270, "", False)))
         print(send_advice(make_data(1, 2.0, 1, 90, T2['conversation'][i]['message'], False)))
         # print(send_advice(make_data(2, -2.4, -0.25, -270, "", False)))
         print(send_advice(make_data(3, -2.2, -0.1, -90, T3['conversation'][i]['message'], False)))

      time.sleep(2)
   time.sleep(30)


