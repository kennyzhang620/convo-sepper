(function (window) {
    var server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
    var client = new BinaryClient(`wss://${server}`);
    var id = document.getElementById("channel");
    var controls = document.getElementById("controls");
    var ms = document.getElementById("ms");

    var ax = document.getElementById("ax")
    var ay = document.getElementById("ay")
    var az = document.getElementById("az")

    const bufferT = 2000;
    var recording = false;

    var accelVectors = [0, 0, 0]
    var testX = [];
    var testY = [];

    console.log("Test1");

    window.exportJson = function(el) {
        //https://stackoverflow.com/questions/26414167/javascript-button-to-download-a-file

        var obj = {
            x: testX,
            y: testY
        };
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
        // what to return in order to show download window?


        el.setAttribute("href", "data:" + data);
        el.setAttribute("download", "data.json");

    }

    function sampleAccel() {
    }

    var timeElapsed = 0;
    function elapsedTimeU() {
        timeElapsed += 1
        ms.value = timeElapsed;

        ax.value = accelVectors[0]
        ay.value = accelVectors[1];
        az.value = accelVectors[2]

        testX.push([timeElapsed, accelVectors[0]])
        testY.push([timeElapsed, accelVectors[2]])
    }

    // 25 samples in 25 ms
    // (a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a )
    // (0, 1, 2, 3,..)
    // 5 samples per 5 ms
    // (v, v, v, v, v)
    // (disp)

    window.setChannel = function() {      
        setup();
        controls.style = "display: block;";
        setInterval(elapsedTimeU, 1);

        
    }

    function handleMotionEvent(event) {

        accelVectors[0] = event.accelerationIncludingGravity.x;
        accelVectors[1] = event.accelerationIncludingGravity.y;
        accelVectors[2] = event.accelerationIncludingGravity.z;
    
        // Do something awesome.
    }
    
    window.addEventListener("devicemotion", handleMotionEvent, true);

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

         // Request permission for iOS 13+ devices
        if (
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === "function"
        ) {
            DeviceMotionEvent.requestPermission();
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