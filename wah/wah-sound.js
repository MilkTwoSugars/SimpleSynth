var lfo, osc, filt;
var oscStarted = false;
var soundStarted = false;

function initialiseSound () { 

    lfo = new p5.Oscillator();
    osc = new p5.Oscillator();
    filt = new p5.Filter();

    osc.setType('sawtooth');
    lfo.setType('sine');

    lfo.disconnect();
    osc.disconnect();
    osc.connect(filt);

    lfo.start();
    osc.amp(0.05)
} 

function updateSound(x, y) {

    let lfoFreq = map(x, 0, windowHeight, 0.1, 10);
    let oscFreq = map(y, 0, windowWidth, 50, 400);

    filterFreq = 1100;
    filterRes = 12
    lfoAmp = 500;

    if (soundStarted){

    if(!oscStarted){
        oscStarted = true;
        osc.start();
    }

    lfo.freq(lfoFreq);
    osc.freq(oscFreq);
    filt.freq(filterFreq);
    filt.res(filterRes);
    lfo.amp(lfoAmp);
    filt.freq(lfo);
}
}