export function recorder_loop(compass: number, gamma: number, beta: number, state: number) {

        var server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
        var id = document.getElementById("channel");
        var controls = document.getElementById("controls");
        var ms = document.getElementById("ms");
        var txt = document.getElementById('txt');
    
        var normal = document.getElementById("normal");
        var ranged = document.getElementById("ranged"); 
    
        const bufferT = 1000;
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
    
        const maxWidth = 13;
        const rollOff = 0.8;
        const rotDelta = 0.25;
        const boundariesM = 5;
        const maxAccel = 1.4;
    
        const scaleVal = 1/20;
    
        var analyserActive = false;
        let ctx: AudioContext;
        let analyser: AnalyserNode;
        let source: MediaStreamAudioSourceNode;
    
        let data: Uint8Array;
    
    
        var beginTS = Date.now();
        const humanRange = [150, 10000];
        const rangerFreq = 12000;
    
        var humanRangeCount = 10;
        var humanCutoff = 120;
    
        var rangedDistance = 0;
        var offset = 0;
    
        function encodeXY(x: number,y: number) {
            return y*maxWidth + x;
        }
    
        function elapsedTimeU() {

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
    
            testTheta = compass;
            testBeta = beta;
            testGamma = gamma;
    
            testX = ax;
            testY = ay;
            testZ = az;
    
            testVX = bias(testVX,0.5, 0.5, 2) + ax;
            testVY = bias(testVY,0.5, 0.5, 2) + ay;
            testVZ = bias(testVZ,0.5, 0.5, 2) + az;
    
            if (testPX + testVX < maxWidth && testPX + testVX > -maxWidth)
                testPX += testVX;
            if (testPY + testVY < maxWidth && testPY + testVY > -maxWidth)
                testPY += testVY;
            if (testPZ + testVZ < maxWidth && testPZ + testVZ > -maxWidth)
                testPZ += testVZ;
    
            CurrPX = testPX *scaleVal;
            CurrPY = testPZ *scaleVal;

            timeElapsed += 1
        }
    
        // 25 samples in 25 ms
        // (a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a )
        // (0, 1, 2, 3,..)
        // 5 samples per 5 ms
        // (v, v, v, v, v)
        // (disp)
        var chSet = false;

        function initS() {   
            if (!chSet) {
                setup();
                setInterval(elapsedTimeU, 1);
                chSet = true;
            }
            
        }
    
        function handleMotionEvent(event: DeviceMotionEvent) {
    
            if (event.acceleration) {
                accelVectors[0] = event.acceleration.x ? event.acceleration.x : 0;
                accelVectors[1] = event.acceleration.y ? event.acceleration.y : 0;
                accelVectors[2] = event.acceleration.z ? event.acceleration.z : 0
            } else {
                accelVectors[0] = 0;
                accelVectors[1] = 0;
                accelVectors[2] = 0;
            }
        
            // Do something awesome.
        }
        
        window.addEventListener("devicemotion", handleMotionEvent, true);
    
        function init() {
            navigator.geolocation.getCurrentPosition(locationHandler);
    
            if (!isIOS) {
                window.addEventListener("deviceorientationabsolute", handler_compass, true);
            }
            initAudio();
        }
    
        async function initAudio() {
            ctx = new AudioContext();
            analyser = ctx.createAnalyser();
            const gainNode = ctx.createGain();
    
            gainNode.gain.value = 4;
    
            navigator.mediaDevices
                .getUserMedia({ video : false, audio : true })
                .then(callback)
                .catch(console.log);
    
    
            function callback(stream: MediaStream) {
                source = ctx.createMediaStreamSource(stream);
                source.connect(gainNode);
                gainNode.connect(analyser);
                //analyser.connect(ctx.destination);
    
                if (!analyserActive) {
                    analyserActive = true;
                    setInterval(audioTracker, 1);
                }
    
                console.log("audio init");
            }
        }
    
        var irnd = 0;
        var normalAvg = 0;
        var rangedAvg = 0;
    
        var trackerMs = 0;
    
        var paused = false;
        function audioTracker() {
            if (data == null) {
                data = new Uint8Array(analyser.frequencyBinCount);
            }
    
            function play() {
                analyser.getByteFrequencyData(data);
    
                // get fullest bin
                var nm1 = 0;
                var nm2 = 0;
    
                humanRangeCount = 0;
                rangedDistance = 0;
                
                for (var j=0; j < analyser.frequencyBinCount; j++) {
    
                    var frequency = j * ctx.sampleRate / analyser.fftSize;
    
                    if (frequency >= humanRange[0] && frequency <= humanRange[1] && data[j] > 25) {
                        humanRangeCount += data[j];
                        nm1++;
                    }
                    
                    if (frequency > rangerFreq && data[j] > 0) {
                        if (nm2 == 0)
                            rangedDistance = data[j];
                        else if (rangedDistance < data[j])
                            rangedDistance = data[j];
                        // console.log(frequency, data[j]);
                        nm2++;
                    }
                }
                
                if (nm1 > 0) {
                    humanRangeCount /= nm1;
                }
    
                normalAvg += humanRangeCount;                          
                irnd++;
    
                
                if (irnd > 10) {
    
                    if (normalAvg / 10 >= humanCutoff) {
                        if (!Cstatus) {
                            recognition.start();
                            beginTS = Date.now();
                        }
    
                                        
                        trackerMs = 0;
                    }
    
                    normal.value = normalAvg / 10;
    
                    normalAvg = 0;
                    irnd = 0;
                }   
                else {
                    trackerMs++;
    
                    // console.log(trackerMs);
    
                    if (trackerMs > 3500) {
                        paused = true;
                    }   
                    else {
                        paused = false;
                    }
                }
            }
    
            play();
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
    
        function result(e) {
    
            try {
                const data = JSON.parse(e);
    
                if (transcriptWords.length > 0 && data.ts == transcriptWords) {
                    transcriptWords = "";
                }
            } catch (e) {
                console.log("Error: ", e);
            }
        }
    
        function captureData() {
            const data = {"id": id.value, "px": CurrPX, "py": CurrPY, "theta": compass, "cxy": encodeXY(CurrPX, CurrPY), "timestamp": beginTS.toString(), "transcript": transcriptWords, "paused": paused}
    
            txt.value = data.transcript;
    
            if (data.transcript.length > 0 || true) {
                sendPacket('/convo-ts', "POST", data, true, result, null);
            }
        }
    
        function MicSnapshot() {
            try {
                if (Cstatus) {
                    recognition.stop();
                }
            }
            catch (e) {
                console.error(e);
            }
        }
    
        var handv = null;
    
        window.startRecording = function() {
            recording = true;
            handv = setInterval(captureData, 100)
        }
    
        window.stopRecording = function() {
            recording = false;
         //   window.Stream.end();
    
            clearInterval(handv);
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
}
