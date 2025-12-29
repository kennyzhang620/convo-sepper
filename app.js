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

// Bearer token middleware for POST requests
const authenticateBearerToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: Bearer token required' });
    }
    
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const expectedToken = process.env.BEARER_TOKEN;
    
    if (!expectedToken) {
        console.error('BEARER_TOKEN environment variable is not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }
    
    if (token !== expectedToken) {
        return res.status(403).json({ error: 'Forbidden: Invalid bearer token' });
    }
    
    next();
};

var timer = Date.now();
const limit = 30;

var ud = 1;

async function responseGenerator (prompt) {

    console.log(ud);
    if (Date.now() - timer > 1000*60) {
        timer = Date.now();
        ud = 1;
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

async function responseGeneratorBulk (prompts) {

    console.log(ud);
    if (Date.now() - timer > 1000*60) {
        timer = Date.now();
        ud = 1;
    }

    if (ud > limit) {
        return "Please wait 1 minute before sending another message.";
    }

    const completion = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: prompts,
		max_tokens: 1000,
	}).catch(err => {
        console.log(err);
		return err;
    });

    return completion.choices[0].message.content;
}

app.post('/chatrecvm', authenticateBearerToken, async (req, res) => {
	let txt = req.body.prompt

    response = await responseGenerator(txt);
    resdata = response;
	
	res.json(resdata);
});

app.post('/chatlists', authenticateBearerToken, async (req, res) => {
	let txt = req.body.prompts

    response = await responseGeneratorBulk(txt);
    resdata = response;
	
	res.json(resdata);
});

var convos_adv = [];

app.post('/convo-ts-list', authenticateBearerToken, function(req,res) {

    if (req.body.convo_id != null) {
        if (req.body.convo_id == convos_adv.length) {
            convos_adv.push(req.body);
        }
        else {
            if (req.body.convo_id < 0 || req.body.convo_id >= convos_adv.length || req.body.convo_id >= limit) {
                return res.json("Invalid convo ID");
            }   
            convos_adv[req.body.convo_id] = req.body;
        }
    }
    return res.json({status: "ok", convo_id: req.body.convo_id});
});

app.get('/convo-ts-list', function(req,res) {
    return res.json(convos_adv);
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
