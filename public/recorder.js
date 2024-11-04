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

    var testTheta = [];
    var testBeta = [];
    var testGamma = [];

    const rollOff = 0.25;
    const rotDelta = 0.5;

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
        var obj = { ax: testX, ay: testY, az: testZ, vx: testVX, vy: testVY, vz: testVZ, px: testPX, py: testPY, pz: testPZ, theta: testTheta, gamma: testGamma, beta: testBeta };
        downloadObjectAsJson(obj, "dataxy")
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
    var diff = 0;
    var avgZ = 0;

    function rotationZ(angle, vector) {
        const x = Math.cos(angle) * vector[0] - Math.sin(angle) * vector[1] + 0;
        const y = Math.sin(angle) * vector[0] + Math.cos(angle) * vector[1] + 0;
        const z = vector[2];

        return [x, y, z];
    }

    function rotationY(angle, vector) {
        const x = Math.cos(angle) * vector[0] + 0 + Math.sin(angle) * vector[2]
        const y = vector[1];
        const z = -Math.sin(angle) * vector[0] + 0 + Math.cos(angle) * vector[2];

        return [x, y, z];
    }

    function rotationX(angle, vector) {
        const x = vector[1];
        const y = Math.cos(angle) * vector[1] - Math.sin(angle) * vector[2];
        const z = Math.sin(angle) * vector[1] + Math.cos(angle) * vector[2];

        return [x, y, z];
    }

    function radians(deg) {
        return ((deg * Math.PI) / 180);
    }
    function elapsedTimeU() {
        ms.value = timeElapsed;

        if (timeElapsed % 10 != 0 || timeElapsed == 0) {
            axc += accelVectors[0]; ayc += accelVectors[1]; azc += accelVectors[2];

            if (timeElapsed % 2 == 1) {
                diff -= Math.sin(0.5 * radians(compass));
                avgZ += abs(diff);
            }
            else {
                diff = Math.sin(0.5 * radians(compass));
            }

            timeElapsed += 1
            return;
        }

        avgZ /= 5;

        if (avgZ >= rotDelta) {
            axc = 0, ayc = 0, azc = 0;
        }

        avgZ = 0; diff = 0;
        axc /= 10; ayc /= 10; azc /= 10;

        var corrXYZ = rotationX(radians(-beta), rotationY(radians(-gamma), rotationZ(0, [axc, ayc, azc])))

        var ax = Math.sin(radians(compass))*threshold(corrXYZ[0], rollOff)
        var ay = threshold(corrXYZ[1], rollOff)
        var az = Math.cos(radians(compass)) *threshold(corrXYZ[2], rollOff)

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

        if (testTheta.length <= 0)
            testTheta.push([timeElapsed, 0])

        if (testBeta.length <= 0)
            testBeta.push([timeElapsed, 0])

        if (testGamma.length <= 0)
            testGamma.push([timeElapsed, 0])

        testTheta.push([timeElapsed, compass])
        testBeta.push([timeElapsed, beta])
        testGamma.push([timeElapsed, gamma])

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

        timeElapsed += 1
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

    function init() {
        navigator.geolocation.getCurrentPosition(locationHandler);

        if (!isIOS) {
            window.addEventListener("deviceorientationabsolute", handler_compass, true);
        }
    }

    function startCompass() {
        if (isIOS) {
            DeviceOrientationEvent.requestPermission()
                .then((response) => {
                    if (response === "granted") {
                        window.addEventListener("deviceorientation", handler_compass, true);
                    } else {
                        alert("has to be allowed!");
                    }
                })
                .catch(() => alert("not supported"));
        }
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

         // Request permission for iOS 13+ devices
        init();
        startCompass();

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true }, success, function (e) {
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