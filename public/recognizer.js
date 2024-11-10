      // https://gopesh3652.medium.com/building-a-voice-to-text-app-with-javascript-a-step-by-step-guide-9042493bdd63
        // JavaScript code will go here
var transcriptWords = ""
var Cstatus = false;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onstart = () => {
    console.log('Listening...');
    Cstatus = true;
};

recognition.onresult = (event) => {
    transcriptWords = event.results[0][0].transcript;
    
};

recognition.onend = () => {
    console.log('Start Voice Input');
    Cstatus = false;
};