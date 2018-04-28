var lfo, osc, filter;
var oscStarted = false;

function initialiseSound () { 

    lfo = new p5.Oscillator();
    osc = new p5.SawOsc();
    filter = new p5.Filter();

    lfo.disconnect();
    osc.disconnect();
    osc.connect(filter);

    lfo.start();
    osc.amp(0.1)
} 

function updateSound(lfoFreq, oscFreq, filterFreq, filterRes, lfoAmp) {

    if(!oscStarted){
        oscStarted = true;
        osc.start();
    }

    lfo.freq(lfoFreq);
    osc.freq(oscFreq);
    filter.freq(filterFreq);
    filter.res(filterRes);
    lfo.amp(lfoAmp);
    filter.freq(lfo);
}