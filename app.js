var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors") //cross-origin resource sharing
var app = express();
var resdata = []
const path = require('path')
const PORT = process.env.PORT || 5010;
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { Configuration, OpenAI } = require("openai");
require('dotenv').config()

const openai = new OpenAI({apiKey: process.env.CHAT_API_KEY});

var timer = Date.now();
const limit = 3;

var ud = 0;

async function responseGenerator (prompt) {

    console.log(ud);
    if (Date.now() - timer > 1000*60) {
        timer = Date.now();
        ud = 0;
    }

    if (ud > limit) {
        return "Please wait 1 minute before sending another message.";
    }
    ud++;

    let inputMessage = prompt;
    const completion = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [{ role: "user", content: prompt }],
		max_tokens: 1000,
	}).catch(err => {
        console.log(err);
		return err;
    });

    return completion.choices[0].message.content;
}

app.post('/chatrecvm', async (req, res) => {
	let txt = req.body.prompt

    response = await responseGenerator(txt);
    resdata = response;
	
	res.json(resdata);
});

app.get('/chattest', async (req, res) => {
    res.json(await responseGenerator("hello"));
})

app.get('/chatrecvm', (req,res) => {
	res.json(resdata);
})

app.listen(PORT, () => {
    console.log(`Example app listening at ${PORT}`)
});

app.use((req, res) => {
    res.status(404);
});

// while(1){ 

//     (async () => {
//         response = (await responseGenerator(input, mood))
//         console.log(response)
//     })()
// }
