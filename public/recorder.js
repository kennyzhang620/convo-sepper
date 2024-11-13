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
    var testX = 0;
    var testY = 0;
    var testZ = 0;

    var testVX = 0;
    var testVY = 0;
    var testVZ = 0;

    var testPX = 0;
    var testPY = 0;
    var testPZ = 0;

    var testTheta = 0;
    var testBeta = 0;
    var testGamma = 0;

    var sampleR = 10;
    var CurrPX = 0; 
    var CurrPY = 0;
    var base = 75000;

    const rollOff = 0.6;
    const rotDelta = 0.5;
    const boundariesM = 5;
    const maxAccel = 1.4;

    const scaleVal = 1/20;

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

        if (timeElapsed % bufferT == 0) {
            MicSnapshot();
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

        testTheta = compass;
        testBeta = beta;
        testGamma = gamma;

        testX = ax;
        testY = ay;
        testZ = az;

        testVX = bias(testVX,0.5, 0.5) + ax;
        testVY = bias(testVY,0.5, 0.5) + ay;
        testVZ = bias(testVZ,0.5, 0.5) + az;

        testPX += testVX;
        testPY += testVY;
        testPZ += testVZ;

        CurrPX = testPX *scaleVal;
        CurrPY = testPZ *scaleVal;

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

        txt.value = data.transcript;

        if (data.transcript.length > 0 || true) {
            sendPacket('/convo-ts', "POST", data, true, function(e) {
                transcriptWords = "";
            }, null);
        }
    }

    function MicSnapshot() {
        if (!Cstatus)
            return recognition.start();
        return recognition.stop();
    }

    var handv = null;

    window.startRecording = function() {
        recording = true;
        handv = setInterval(captureData, 1)
    }

    window.pauseRecording = function() {
        recording = false;
       // window.Stream.pause();
    }

    window.stopRecording = function() {
        recording = false;
     //   window.Stream.end();

        clearInterval(handv);
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
})(this);