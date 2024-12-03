import hashlib
import requests
import pandas as pd
from io import StringIO
import math

from dotenv import load_dotenv

load_dotenv()

base = 65535
fformations = set()

def calculate_angle_between_points(point1, point2):
    """Calculate the angle between two points."""
    return math.degrees(math.atan2(point2[1] - point1[1], point2[0] - point1[0]))

def is_facing_each_other(points, max_angle_diff=45):
    """
    Check if participants are facing each other within a reasonable angle.
    
    :param points: List of (x, y, theta) tuples
    :param max_angle_diff: Maximum acceptable angle difference
    :return: Boolean indicating if participants are facing each other
    """
    if len(points) < 2:
        return False
    
    # Calculate relative orientations
    for i in range(len(points)):
        for j in range(i+1, len(points)):
            # Angle between points
            angle_between = calculate_angle_between_points(points[i][:2], points[j][:2])
            
            # Check if participants are facing each other
            angle_diff1 = abs(points[i][2] - (angle_between + 180) % 360)
            angle_diff2 = abs(points[j][2] - angle_between)
            
            if angle_diff1 > max_angle_diff or angle_diff2 > max_angle_diff:
                return False
    
    return True

def error(exp, actual):
   if (exp == 0):
      return 0;

   return abs(exp - actual)

def detect_fformations(data, max_distance=100, max_participants=4):
    """
    Detect F-formations in the data.
    
    :param data: DataFrame with participant positions
    :param max_distance: Maximum distance between participants in an F-formation
    :param max_participants: Maximum number of participants in an F-formation
    :return: List of F-formations
    """
    fformations = []
    
    # Try different combinations of participants
    for n in range(2, min(len(data), max_participants + 1)):
        for combination in itertools.combinations(data.itertuples(), n):
            # Extract x, y, theta for each participant
            points = [(row.px, row.py, row.theta) for row in combination]
            
            # Check distance between all points
            distances_ok = all(
                math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2) <= max_distance 
                for i, p1 in enumerate(points) 
                for j, p2 in enumerate(points) if i != j
            )
            
            # Check facing orientation
            facing_ok = is_facing_each_other(points)
            
            if distances_ok and facing_ok:
                fformations.append([row.id for row in combination])
    
    return fformations

def cluster(df, err):
   pcxy = 0
   clusters = []
   ind = -1
   for index, row in df.iterrows():
    #  print(pcxy, row['cxy'], error(pcxy,row['cxy']) )
      if ind == -1:
          clusters.append([row['id']])
          ind += 1
      else:
         if error(pcxy,row['cxy']) > err:
            clusters.append([row['id']])
            ind += 1
         else:
            clusters[ind].append(row['id'])

      pcxy = row['cxy']
   return clusters;

def transcripts(data, clusters):
   datav = data.sort_values(by=['timestamp']).drop_duplicates(subset='transcript', keep="last")
   convos = pd.DataFrame()
   ind = 0
   for ids in clusters:
      convodf = pd.DataFrame()
      for id in ids:
         condf = datav.loc[datav['id'] == id].sort_values(by=['timestamp'])
         condf['convo'] = ind
         convodf = pd.concat([convodf, condf]).sort_values(by=['timestamp'])
      ind += 1

      convos = pd.concat([convos, convodf])
  
   return convos;

def inference(transcript):
   url = "https://translate-server.herokuapp.com/chatrecvm"
   payload = {
      "prompt": "Infer the topic of the following conversation in 16 words or less (ignore numerical indicators): " + transcript
   }
   response = requests.post(url, json=payload)
   return response.json()

def tips(transcript):
   url = "https://translate-server.herokuapp.com/chatrecvm"
   payload = {
      "prompt": "You are an advanced conversational analysis assistant. Analyze the provided conversation transcript and format your output as a list of the following  conversational entry tips to the user, do not include any other text but the 4 tips.  Ensure tips are contextually relevant, grounded in the nuances of the transcript. Ensure tips are short and easily readable within a few seconds. The techniques you will use: \n1. Schisming by Schism-Inducing Turn (SIT): \nIdentify moments in the transcript where introducing a new topic would improve the flow of the conversation. \nSuggest timing for such turns to minimize overlap and maximize attention. \nProvide examples of direct verbal address (e.g., using names or pronouns) and question-answer structures to effectively draw in specific participants. \nRecommend appropriate non-verbal strategies (e.g., gaze, gesture) if co-presence is implied in the context. \n2. Schisming by Toss-Out: \nHighlight opportunities to introduce a topic-relevant remark that fits organically within the conversation's flow. \nEnsure the suggestion aligns with the current topic and conversation structure without targeting specific individuals. \nOffer phrasing that keeps the conversation cohesive while subtly encouraging engagement. \n3. Schisming by Aside: \nPoint out opportunities for quiet, subdued, topic-relevant comments that can add depth without interrupting the primary thread of conversation. \nExplain how to time these asides to overlap gently with the ongoing conversation, avoiding explicit turn-relevant points (TRPs). \nInclude examples of when and how to lower vocal emphasis to match the technique. \n4. Schisming by Retro-Sequence: \nIdentify turns in the transcript that were retroactively treated as initiating a new conversational path. \nAnalyze what prompted this retro-sequencing (e.g., laughter at an unintended humorous remark). \nSuggest ways to embrace or redirect these retro-sequences to enrich conversational dynamics." + transcript
   }
   response = requests.post(url, json=payload)
   return response.json()

def send_advice(data):
   url = "https://conv-count-poc-997c48b4c4cc.herokuapp.com" + "/convo-ts-list"
   import json

   print(data)
   payload = json.loads(data)
   
   response = requests.post(url, json=payload)
   return response.json()

def send_clusters(data):
   url = "https://conv-count-poc-997c48b4c4cc.herokuapp.com" + "/convo-ts-clusters"
   import json
   # payload = json.loads(data)
   response = requests.post(url, json=data)
   return response.json()

def cat(data):
   return data.to_string(index=False)

def advice(data):
   results = pd.DataFrame()
   for convo in data['convo'].unique():   
      datai = data.loc[data['convo'] == convo].sort_values(by=['timestamp'])

      ids = datai['id'].unique().tolist()
      inf = inference(cat(datai['transcript']))
      tip = tips(cat(datai['transcript']))
      if 'Please wait 1 minute before sending another message.' not in inf and 'Please wait 1 minute before sending another message.' not in tip:
         print(inf)
         results = pd.concat([results, pd.DataFrame({'convo_id': [convo], 'transcript': [cat(datai['transcript'])], 'inference': [inf], 'tips': [tip], 'ids': [ids]})])
   return results;

from pandas.util import hash_pandas_object

prevts = 0;
while (True):
    try:
      url1 = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-ids"
      url2 = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-logs"
      r = requests.get(url1, stream=False)
      r2 = requests.get(url2, stream=False)

      err = False;
      data = pd.read_json(StringIO(r.text));
      data2 = pd.read_json(StringIO(r2.text));

      c = cluster(data, 1);
      print(c)
      send_clusters(c)

      ts = transcripts(data2, c)[['id', 'timestamp', 'transcript', 'convo', 'paused']].tail(100);

      if prevts != int(hashlib.sha256(hash_pandas_object(ts).values).hexdigest(), 16):
         prevts = int(hashlib.sha256(hash_pandas_object(ts).values).hexdigest(), 16)

         adv = advice(ts)

         if not adv.empty:
        #    adv.to_csv('advice.csv', index=False)
            send_advice(adv.to_json(orient='records'))
    
     # ts.to_csv('conversations.csv', index=False)
    except Exception as e:
      print("Error: ", e)

