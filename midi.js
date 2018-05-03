var midi, data;
var soundStarted = false;
var keys = {};
var count = 0;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("No MIDI support in your browser.");
}

function onMIDISuccess(midiAccess) {
    midi = midiAccess;

    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = onMIDIMessage;
    }
}

function onMIDIFailure(error) {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
}

function onMIDIMessage(message) {
    data = message.data;
    playNote(data);
}

function playNote(data) {
    if (data[2] != 127) { 
        if (keys[data[1]] == null) {  
            let freq = midiToFreq(data[1])
            let key = new Key(waveController.waveType, freq);
            key.initialise();
            key.play();
            keys[data[1]] = key;
        }
    } else {
        if (keys[data[1]] != null) {
        keys[data[1]].stop();
        keys[data[1]] = null;
        }
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        let data = [null, 60, 100];
        playNote(data);
    }
    if (keyCode === UP_ARROW) {
        let data = [null, 64, 100];
        playNote(data);
    }
    if (keyCode === RIGHT_ARROW) {
        let data = [null, 67, 100];
        playNote(data);
    }
    if (keyCode === DOWN_ARROW) {
        let data = [null, 72, 100];
        playNote(data);
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        let data = [null, 60, 127];
        playNote(data);
    }
    if (keyCode === UP_ARROW) {
        let data = [null, 64, 127];
        playNote(data);
    }
    if (keyCode === RIGHT_ARROW) {
        let data = [null, 67, 127];
        playNote(data);
    }
    if (keyCode === DOWN_ARROW) {
        let data = [null, 72, 127];
        playNote(data);
    }
}

function checkAudioContext() {
    if (!soundStarted) {
        getAudioContext().resume().then(() => {
            soundStarted = true;
        });
    }
}