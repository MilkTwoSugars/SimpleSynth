function Key(waveType, frequency) {

    this.attackLevel = 0.1;
    this.releaseLevel = 0;

    this.attackTime;
    this.susPercent;
    this.decayTime;
    this.releaseTime;

    this.wave = waveType;
    this.freq = frequency;

    this.osc;
    this.env;

    this.initialise = function() {
        this.osc = new p5.Oscillator(this.wave);
        this.env = new p5.Env();

        this.attackTime = map(sliders[0].y, sliderTopMargin, (sliderTopMargin + sliderHeight), 0, 2);
        this.decayTime = map(sliders[1].y, sliderTopMargin, (sliderTopMargin + sliderHeight), 0, 2);
        this.susPercent = map(sliders[2].y, sliderTopMargin, (sliderTopMargin + sliderHeight), 0, 0.1);
        this.releaseTime = map(sliders[3].y, sliderTopMargin, (sliderTopMargin + sliderHeight), 0, 2);

        this.env.setADSR(this.attackTime, this.decayTime, this.susPercent, this.releaseTime);
        this.env.setRange(this.attackLevel, this.releaseLevel);

        this.osc.amp(this.env);
        this.osc.freq(this.freq);
        this.osc.start();
    }

    this.play = function() {
        this.env.triggerAttack();
    }

    this.stop = function() {
        this.env.triggerRelease();
        this.remove();
    }

    this.remove = function() {
        this.osc.stop(this.releaseTime);
    }
}