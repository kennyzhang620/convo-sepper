var express = require('express');

const { networkInterfaces } = require('os');
const cookieParser = require('cookie-parser');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var wav = require('wav');

var port = process.env.PORT || 3000;
var outFile = '-demo.wav';

var pipeM = null;
var channels = [];

var needle = -1;
const limit = 500;

var app = express();

app.set('views', __dirname + '/tpl');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
//app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'))

app.use(function (request, response, next) {

    if (request.headers['x-forwarded-proto'] !== 'https') {
        return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
})

app.get('/', function (req, res) {
    res.render('index', {id: channels.length});
});

app.get('/map', function (req, res) {
    res.render('map_vis', {id: channels.length});
});

app.post('/resume-select', async(req, res) => {
    var data = await get_from_backend(0,0,0,0,10,false);     
    console.log("Post mode");

   // data.projects += data.legacy_p

    console.log("A")
    markSelection(data.projects,req.body.keywords.replace(/\s/g, '').split(","))
    console.log("A")
    markSelection(data.jobs,req.body.keywords.split(","))
    console.log("A")
    markSelection(data.volunt,req.body.keywords.split(","))
    console.log("A")
    markSelection(data.awar,req.body.keywords.split(","))
    console.log("A")
   // splitSkill(data.profile, req.body.keywords.split(","))
    //console.log("A")

    latexgen.generateLatex(data, latexgen.latexTemp, res);
});

app.post('/channel', function (req, res) {

    const ind = req.body.channel;

    console.log(req.body)

    if (ind > channels.length || ind < 0) {
        return res.json("Invalid channel ID");
    }

    if (ind == channels.length) {
        channels.push(null)
    }

    needle = ind;

    console.log("Position set to " + needle + " " + channels.length);
    return res.end();

});

var convologs = []

var ind = 0;
app.post('/convo-ts', function(req, res) {
    if (req == null || req.body == null)
        return res.end();

    if (channels.length < req.body.id || req.body.id < 0) {
        return res.end();
    }

    if (convologs.length < limit) {
        convologs.push(req.body);
    }
    else {
        convologs[ind++ % limit] = req.body;
    }

    channels[req.body.id] = req.body;

    return res.end();

});

app,get()

app.get('/convo-ts-logs', function(req,res) {
    return res.json(convologs);
});

app.get('/convo-ts-ids', function(req,res) {
    return res.json(channels);
});

app.get('/convo-ts-logs-reset', function(req,res) {
    convologs = [];
    channels = []
    return res.send("Cleared.");
});

app.get('/stream/:id', function (req, res) {

    let ind = req.params.id;

    if (needle == -1 || !ind)
        return res.send("No data");

    const dpipe = channels[ind];

    if (dpipe) {
        console.log("pipe " + dpipe)
        return dpipe.pipe(res);
    }

    return res.send("Does not exist");
});

const server = app.listen(port);

console.log('server open on port ' + port);

binaryServer = BinaryServer({ server: server});

binaryServer.on('connection', function (client) {
    console.log('new connection');
    try {
        client.on('stream', function (stream, meta) {
           // console.log('new stream at' + needle);
            channels[needle] = stream;

            stream.on('end', function () {
               // console.log('end stream at' + needle);
             //   pipeM = null;
            });
        });
    }
    catch (err) {

    }
});

