(function (window) {
    var server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
    var client = new BinaryClient(`wss://${server}`);
    var id = document.getElementById("channel");
    var controls = document.getElementById("controls");
    var ms = document.getElementById("ms");
    var txt = document.getElementById('txt');

    var avx = document.getElementById("ax")
    var avy = document.getElementById("ay")
    var avz = document.getElementById("az")

    var pvx = document.getElementById("px");
    var pvz = document.getElementById("pz");

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

    var sampleR = 10;
    var CurrPX = 0; 
    var CurrPY = 0;
    var base = 75000;

    const rollOff = 0.6;
    const rotDelta = 0.5;
    const boundariesM = 5;
    const maxAccel = 1.4;

    function elapsedTimeU() {
        ms.value = timeElapsed;

        if (timeElapsed % sampleR != 0 || timeElapsed == 0) {
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
        axc /= sampleR; ayc /= sampleR; azc /= sampleR;

        var corrXYZ = rotationX(radians(-beta), rotationY(radians(-gamma), [axc, ayc, azc]))

        var ax = Math.sin(radians(compass))*threshold(corrXYZ[2], rollOff, maxAccel)
        var ay = threshold(corrXYZ[1], rollOff, maxAccel )
        var az = Math.cos(radians(compass))*-threshold(corrXYZ[0], rollOff, maxAccel)

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

        CurrPX = testPX[testPX.length - 1][1];
        CurrPY = testPZ[testPZ.length - 1][1];

        pvx.value = CurrPX; pvz.value = CurrPY;

        timeElapsed += 1
    }

    // 25 samples in 25 ms
    // (a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a )
    // (0, 1, 2, 3,..)
    // 5 samples per 5 ms
    // (v, v, v, v, v)
    // (disp)
    var chSet = false;
    window.loadChannel = function() {
        controls.style = "display: block;";
    }
    window.setChannel = function() {   
        if (!chSet) {
            setup();
            setInterval(elapsedTimeU, 1);
            chSet = true;
        }
        
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
         // Request permission for iOS 13+ devices
        init();
        startCompass();
    }

    function captureData() {
        const data = {"id": id.value, "px": CurrPX, "py": CurrPY, "timestamp": Date().toString(), "transcript": transcriptWords}

        txt.value = data;
        sendPacket('/convo-ts', "POST", data, true, function(e) {

        }, null);
    }

    function callrecog() {
        recognition.start()
    }

    var handv = null;
    var handv2 = null;

    window.startRecording = function() {
        recording = true;
        handv = setInterval(captureData, bufferT)
        handv2 = setInterval(callrecog, 300);
    }

    window.pauseRecording = function() {
        recording = false;
       // window.Stream.pause();
    }

    window.stopRecording = function() {
        recording = false;
     //   window.Stream.end();

        clearInterval(handv);
        clearInterval(handv2);
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
})(this);