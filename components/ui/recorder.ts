import { abs, bias, radians, rotationX, rotationY, sendPacket, threshold } from "./_helpers";

class Recorder {

    timeElapsed = 0;

    axc = 0; ayc = 0; azc = 0;
    diff = 0;
    avgZ = 0;
    server = "conv-count-poc-997c48b4c4cc.herokuapp.com"
    id = document.getElementById("channel");
    controls = document.getElementById("controls");
    ms = document.getElementById("ms");
    txt = document.getElementById('txt');

    normal = document.getElementById("normal");
    ranged = document.getElementById("ranged");

    bufferT = 1000;
    recording = false;

    accelVectors = [0, 0, 0]
    testX = 0;
    testY = 0;
    testZ = 0;

    testVX = 0;
    testVY = 0;
    testVZ = 0;

    testPX = 0;
    testPY = 0;
    testPZ = 0;

    testTheta = 0;
    testBeta = 0;
    testGamma = 0;

    sampleR = 10;
    CurrPX = 0;
    CurrPY = 0;

    maxWidth = 13;
    rollOff = 0.8;
    rotDelta = 0.25;
    boundariesM = 5;
    maxAccel = 1.4;
    maxDistance = 6;
    refVtr = [0,1];

    scaleVal = 50 / 10;
    humanRange = [150, 10000];
    rangerFreq = 12000;

    analyserActive = false;
    ctx: AudioContext;
    analyser: AnalyserNode;
    source: MediaStreamAudioSourceNode;

    data: Uint8Array;


    beginTS = Date.now();
    humanRangeCount = 10;
    humanCutoff = 120;

    rangedDistance = 0;
    offset = 0;
    zeroThres = 1;

    irnd = 0;
    normalAvg = 0;
    rangedAvg = 0;

    trackerMs = 0;

    paused = false;
    chSet = false;

    transcriptWords = ""

    currID = 0;

    encodeXY = (x: number, y: number) => {
        return y * this.maxWidth + x;
    }

    elapsedTimeU = (compass: number, gamma: number, beta: number) => {

     //   console.log(this.timeElapsed)
     if (this.timeElapsed % this.sampleR != 0 || this.timeElapsed == 0) {
        this.axc += this.accelVectors[0]; this.ayc += this.accelVectors[1]; this.azc += this.accelVectors[2];

        if (this.timeElapsed % 2 == 1) {
            this.diff -= Math.sin(0.5 * radians(compass));
            this.avgZ += abs(this.diff);
        }
        else {
            this.diff = Math.sin(0.5 * radians(compass));
        }

        this.timeElapsed += 1
        return;
    }
    
    this.avgZ /= 5;

    if (this.avgZ >= this.rotDelta) {
        this.axc = 0, this.ayc = 0, this.azc = 0;
    }

    this.avgZ = 0; this.diff = 0;
    this.axc /= this.sampleR; this.ayc /= this.sampleR; this.azc /= this.sampleR;

    var corrXYZ = rotationX(radians(-beta), rotationY(radians(-gamma), [this.axc, this.ayc, this.azc]))

    var ax = Math.sin(radians(compass))*threshold(corrXYZ[2], this.rollOff, this.maxAccel)
    var az = Math.cos(radians(compass))*-threshold(corrXYZ[0], this.rollOff, this.maxAccel)

    this.axc = 0, this.ayc = 0, this.azc = 0;

    this.testTheta = compass;
    this.testBeta = beta;
    this.testGamma = gamma;

    this.testX = ax;
    this.testZ = az;

    this.testVX = bias(this.testVX,0.5, 0.5, 2) + ax;
    this.testVZ = bias(this.testVZ,0.5, 0.5, 2) + az;

    if (this.testPX + this.testVX < this.maxWidth && this.testPX + this.testVX > -this.maxWidth)
        this.testPX += this.testVX;
    if (this.testPZ + this.testVZ < this.maxWidth && this.testPZ + this.testVZ > -this.maxWidth)
        this.testPZ += this.testVZ;

    if (this.testPX + this.testPZ > this.zeroThres || this.testPX + this.testPZ < -this.zeroThres) {

        const newX = (this.refVtr[0] * Math.cos(radians(compass)) + this.refVtr[1] * Math.sin(radians(compass))) * this.scaleVal;
        const newY = (this.refVtr[0] * Math.sin(radians(compass)) + this.refVtr[1] * Math.cos(radians(compass))) * this.scaleVal;
        if (this.CurrPX + newX < this.maxDistance && this.CurrPX + newX > -this.maxDistance )
            this.CurrPX += newX;

        if (this.CurrPY + newY < this.maxDistance && this.CurrPY + newY > -this.maxDistance)
            this.CurrPY += newY;

        this.testPX = 0; this.testPZ = 0;
    }

    this.timeElapsed += 1
    }

    // 25 samples in 25 ms
    // (a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a )
    // (0, 1, 2, 3,..)
    // 5 samples per 5 ms
    // (v, v, v, v, v)
    // (disp)


    initS = () => {
        if (!this.chSet) {
            this.setup();
            this.chSet = true;
        }

    }

    handleMotionEvent = (event: DeviceMotionEvent) => {

        if (event.acceleration) {
            this.accelVectors[0] = event.acceleration.x ? event.acceleration.x : 0;
            this.accelVectors[1] = event.acceleration.y ? event.acceleration.y : 0;
            this.accelVectors[2] = event.acceleration.z ? event.acceleration.z : 0;
        } else {
            this.accelVectors[0] = 0;
            this.accelVectors[1] = 0;
            this.accelVectors[2] = 0;
        }

        // Do something awesome.
    }

    init = () => {
        window.addEventListener("devicemotion", this.handleMotionEvent, true);
        this.initAudio();
    }


    callback = (stream: MediaStream) => {
        this.source = this.ctx.createMediaStreamSource(stream);
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.analyser);
        //analyser.connect(ctx.destination);

        if (!this.analyserActive) {
            this.analyserActive = true;
            setInterval(this.audioTracker, 1);
        }

    //    console.log("audio init");
    }

    gainNode: GainNode;

    initAudio = () => {
        this.ctx = new AudioContext();
        this.analyser = this.ctx.createAnalyser();

        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.value = 4;

        navigator.mediaDevices
            .getUserMedia({ video: false, audio: true })
            .then(this.callback)
            .catch(console.log);


    }

    play = () => {
        this.analyser.getByteFrequencyData(this.data);

        // get fullest bin
        var nm1 = 0;
        var nm2 = 0;

        this.humanRangeCount = 0;
        this.rangedDistance = 0;

        for (var j = 0; j < this.analyser.frequencyBinCount; j++) {

            const frequency = j * this.ctx.sampleRate / this.analyser.fftSize;

            if (frequency >= this.humanRange[0] && frequency <= this.humanRange[1] && this.data[j] > 25) {
                this.humanRangeCount += this.data[j];
                nm1++;
            }

            if (frequency > this.rangerFreq && this.data[j] > 0) {
                if (nm2 == 0)
                    this.rangedDistance = this.data[j];
                else if (this.rangedDistance < this.data[j])
                    this.rangedDistance = this.data[j];
                // console.log(frequency, data[j]);
                nm2++;
            }
        }

        if (nm1 > 0) {
            this.humanRangeCount /= nm1;
        }

        this.normalAvg += this.humanRangeCount;
        this.irnd++;


        if (this.irnd > 10) {

            if (this.normalAvg / 10 >= this.humanCutoff) {
                this.trackerMs = 0;
            }

            this.normalAvg = 0;
            this.irnd = 0;
        }
        else {
            this.trackerMs++;

            // console.log(trackerMs);

            if (this.trackerMs > 3500) {
                this.paused = true;
            }
            else {
                this.paused = false;
            }
        }
    }

    audioTracker = () => {
        if (this.data == null) {
            this.data = new Uint8Array(this.analyser.frequencyBinCount);
        }



        this.play();
    }

    setup = () => {
        console.log("connect")
        // Request permission for iOS 13+ devices
        this.init();
    }

    result = (e: string) => {

        try {
            const data = JSON.parse(e);

            if (this.transcriptWords.length > 0 && data.ts == this.transcriptWords) {
                this.transcriptWords = "";
            }
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    captureData = (compass: number) => {
        if (this.transcriptWords.length <= 0 && this.words.length > 0) {
            this.transcriptWords = this.words.shift() || "";
        }
        const data = { "id": this.currID, "px": this.CurrPX, "py": this.CurrPY, "theta": compass, "cxy": this.encodeXY(this.CurrPX, this.CurrPY), "timestamp": this.beginTS.toString(), "transcript": this.transcriptWords, "paused": this.paused }

        if (data.transcript.length > 0 || true) {
            sendPacket('https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts', "POST", data, true, this.result, undefined);
        }
    }

    words: string[] = [];

    queue_ts = (ts: string) => {
        this.words.push(ts);
    }

    recorder_loop = (compass: number, gamma: number, beta: number) => {


        this.elapsedTimeU(compass, gamma, beta);
        this.captureData(compass);

        // handv = null;

        //window.startRecording = function() {
        //    recording = true;
        //    handv = setInterval(captureData, 100)
        //}

        //window.stopRecording = function() {
        //    recording = false;
        // //   window.Stream.end();

        //    clearInterval(handv);
        //    setTimeout(function() {
        //        location.reload();
        //    }, 2000);
        //}
    }

    constructor(id: number) {
        this.currID = id;
        this.init();
    }
}

export default Recorder;