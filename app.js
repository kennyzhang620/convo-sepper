var express = require('express');

const { networkInterfaces } = require('os');

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
var app = express();

app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'))

binaryServer = BinaryServer({ host: `wss://${results["en0"][0]}`, port: 9001});

binaryServer.on('connection', function (client) {
    console.log('new connection');
    try {
        client.on('stream', function (stream, meta) {
            console.log('new stream');
            pipeM = stream;

            stream.on('end', function () {
            });
        });
    }
    catch (err) {

    }
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/str', function (req, res) {
    pipeM.pipe(res);
});

app.listen(port);

console.log('server open on port ' + port);
