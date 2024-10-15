(function (window) {
    var server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
    var client = new BinaryClient(`wss://${server}`);
    var id = document.getElementById("channel")
    const base = 65535;
    const bufferT = 3000;

    console.log(id.value)

    console.log("Test1");
    client.on('open', function() {
        console.log("connect")
        //create stream when client connect to server by websocket
        window.Stream = client.createStream();

        //get Media from user, this time the media is audio, and call function 'success' continuously during the time we record
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: true }, success, function(e) {
                alert('Error capturing audio.');
            });
        } else alert('getUserMedia not supported in this browser.');

        var recording = !false;

        //When recording, if after specific time our browser doesn't recognize any voice from user, it stops and generate wav file
        if (recording) {
            if ('webkitSpeechRecognition' in window) {
                var speechRecognizer = new webkitSpeechRecognition();
                speechRecognizer.continuous = true;
                speechRecognizer.interimResults = true;
                speechRecognizer.lang = 'en-US';
                speechRecognizer.start();
                speechRecognizer.onspeechend = function() {
                    window.Stream.end();
                    recording = false;
                    alert('You were quiet for a while so it automatically generated your voice memo.');
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                }

                //handle when error occurs when recognizing voice
                speechRecognizer.onerror = function(event) {};
            } else {
                alert('Your browser is not supported. If google chrome, please upgrade!');
            }
        }

        function startR() {
            recording = false;
            window.Stream.end();

            //  clearInterval(handv);
            setTimeout(function () {
                location.reload();
            }, 300);
        }

        var handv = setInterval(startR, bufferT)

        window.startRecording = function() {
            recording = true;
        }

        window.pauseRecording = function() {
            recording = false;
            window.Stream.pause();
        }

        window.stopRecording = function() {
            recording = false;
            window.Stream.end();

          //  clearInterval(handv);
            setTimeout(function() {
                location.reload();
            }, 2000);
        }

        function success(e) {
            audioContext = window.AudioContext || window.webkitAudioContext;
            context = new audioContext();

            // the sample rate is in context.sampleRate
            audioInput = context.createMediaStreamSource(e);

            var bufferSize = 2048;
            recorder = context.createScriptProcessor(bufferSize, 1, 1);

            recorder.onaudioprocess = function(e) {
                if (!recording) return;
                console.log('recording');
                var left = e.inputBuffer.getChannelData(0);
             //   window.Stream.write(idV);
                window.Stream.write(convertoFloat32ToInt16(left));
            }

            audioInput.connect(recorder)
            recorder.connect(context.destination);
        }

        function convertoFloat32ToInt16A(buffer) {
            var l = buffer.length*2;
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
                buf[l] =  buffer[l] * 0xFFFF; //convert to 16 bit
                l -= 1
            }
            return buf.buffer
        }
    });
})(this);