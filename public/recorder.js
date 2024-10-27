(function (window) {
    var server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
    var client = new BinaryClient(`wss://${server}`);
    var id = document.getElementById("channel");
    var controls = document.getElementById("controls");
    var ms = document.getElementById("ms");

    var avx = document.getElementById("ax")
    var avy = document.getElementById("ay")
    var avz = document.getElementById("az")

    const bufferT = 2000;
    var recording = false;

    var accelVectors = [0, 0, 0]
    var testX = [];
    var testY = [];
    var testZ = [];

    var testVX = [];
    var testVY = [];
    var testVZ = [];

    var testPX = [];
    var testPY = [];
    var testPZ = [];

    console.log("Test1");

    function downloadObjectAsJson(exportObj, exportName) {
        // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    window.exportJson = function () {
        downloadObjectAsJson({ ax: testX, ay: testY, az: testZ, vx: testVX, vy: testVY, vz: testVZ, px: testPX, py: testPY, pz: testPZ }, "dataxy")
    }

    function sampleAccel() {
    }

    // Sample only data +/- > thres
    function threshold(flv, thres) {
        if (flv > thres)
            return flv

        if (flv < -thres)
            return flv

        return 0;
    }

    function abs(val){
        if (val < 0) return -val;

        return val;
    }

    // Add negated acceleration to counteract accuracy loss as result of thresholding
    function bias(val, offset, thres) {
        if (abs(thres - val) <= thres) {
            return 0
        }

        if (val > 0)
            return val - offset;

        if (val < 0)
            return val + offset;

        return 0;
    }

    var timeElapsed = 0;

    var axc = 0, ayc = 0, azc = 0;
    function elapsedTimeU() {
        timeElapsed += 1
        ms.value = timeElapsed;

        if (timeElapsed % 10 != 0 || timeElapsed == 0) {
            axc += accelVectors[0]; ayc += accelVectors[1]; azc += accelVectors[2];
            return;
        }

        axc /= 10; ayc /= 10; azc /= 10;

        var ax = threshold(axc, 0.06)
        var ay = threshold(ayc, 0.06)
        var az = threshold(azc, 0.06)

        axc = 0, ayc = 0, azc = 0;

        avx.value = ax
        avy.value = ay
        avz.value = az

        if (testX.length <= 0)
            testX.push([timeElapsed, 0])

        if (testY.length <= 0)
            testY.push([timeElapsed, 0])

        if (testZ.length <= 0)
            testZ.push([timeElapsed, 0])

        testX.push([timeElapsed, ax])
        testY.push([timeElapsed, ay])
        testZ.push([timeElapsed, az])

        if (testVX.length <= 0)
            testVX.push([timeElapsed, 0])

        if (testVY.length <= 0)
            testVY.push([timeElapsed, 0])

        if (testVZ.length <= 0)
            testVZ.push([timeElapsed, 0])

        testVX.push([timeElapsed, bias(testVX[testVX.length - 1][1],0.5, 0.5) + ax])
        testVY.push([timeElapsed, bias(testVY[testVY.length - 1][1],0.5, 0.5) + ay])
        testVZ.push([timeElapsed, bias(testVZ[testVZ.length - 1][1],0.5, 0.5) + az])

        if (testPX.length <= 0)
            testPX.push([timeElapsed, 0])

        if (testPY.length <= 0)
            testPY.push([timeElapsed, 0])

        if (testPZ.length <= 0)
            testPZ.push([timeElapsed, 0])

        testPX.push([timeElapsed, testPX[testPX.length - 1][1] + testVX[testVX.length - 1][1]])
        testPY.push([timeElapsed, testPY[testPY.length - 1][1] + testVY[testVY.length - 1][1]])
        testPZ.push([timeElapsed, testPZ[testPZ.length - 1][1] + testVZ[testVZ.length - 1][1]])

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

        accelVectors[0] = event.acceleration.x;
        accelVectors[1] = event.acceleration.y;
        accelVectors[2] = event.acceleration.z;
    
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