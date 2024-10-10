var express = require('express');
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

binaryServer = BinaryServer({ host: `wss://localhost`, port: 9001});

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
