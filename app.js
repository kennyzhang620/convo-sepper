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
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.CHAT_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function responseGenerator (prompt) {
    let inputMessage = prompt;
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: inputMessage,
        max_tokens: 1000,
    }).catch(err => {
        console.log(err);
		return err;
    });

    return completion.data
}

app.post('/chatrecvm', async (req, res) => {
	let txt = req.body.prompt

    response = await responseGenerator(txt);
    resdata = prompt;
	
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
