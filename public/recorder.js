(function (window) {
    var server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
    var client = new BinaryClient(`wss://${server}`);
    var id = document.getElementById("channel");
    var controls = document.getElementById("controls");
    var ms = document.getElementById("ms");

    const bufferT = 2000;
    var recording = false;

    console.log("Test1");

    var timeElapsed = 0;
    function elapsedTimeU() {
        timeElapsed += 4
        ms.value = timeElapsed;
    }

    window.setChannel = function() {      
        setup();
        controls.style = "display: block;";
        setInterval(elapsedTimeU, 1);

    }

    function setup() {
        console.log("connect")
        //create stream when client connect to server by websocket
        window.Stream = client.createStream();

        function convertoFloat32ToInt16A(buffer) {
            var l = buffer.length * 2;
            var buf = new Int32Array(l)
            const idV = base + parseInt(id.value);
            while (l > 0) {
                buf[l] = idV
                buf[l - 1] = buffer[l] * 0xFFFF; //convert to 16 bit
                l -= 2
            }
            return buf.buffer
        }

        function convertoFloat32ToInt16(buffer) {
            var l = buffer.length;
            var buf = new Int32Array(l)
            while (l > 0) {
                buf[l] = buffer[l] * 0xFFFF; //convert to 16 bit
                l -= 1
            }
            return buf.buffer
        }

        function success(e) {
            audioContext = window.AudioContext || window.webkitAudioContext;
            context = new audioContext();

            // the sample rate is in context.sampleRate
            audioInput = context.createMediaStreamSource(e);

            var bufferSize = 2048;
            recorder = context.createScriptProcessor(bufferSize, 1, 1);

            recorder.onaudioprocess = function (e) {
                if (!recording) return;
                console.log('recording');
                var left = e.inputBuffer.getChannelData(0);
                //   window.Stream.write(idV);
                window.Stream.write(convertoFloat32ToInt16(left));
            }

            audioInput.connect(recorder)
            recorder.connect(context.destination);
        }

        //get Media from user, this time the media is audio, and call function 'success' continuously during the time we record
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia;

            

        if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: true }, success, function (e) {
                alert('Error capturing audio.');
            });
        } else alert('getUserMedia not supported in this browser.');

    }

    client.on('open', function() {

        function startR() {
            recording = false;
            window.Stream.end();

            //  clearInterval(handv);
            setTimeout(function () {
                recording = true;
                setup();
            }, 300);
        }

        var handv = null;

        window.startRecording = function() {
            recording = true;
            handv = setInterval(startR, bufferT)
        }

        window.pauseRecording = function() {
            recording = false;
            window.Stream.pause();
        }

        window.stopRecording = function() {
            recording = false;
            window.Stream.end();

            clearInterval(handv);
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
    });
})(this);