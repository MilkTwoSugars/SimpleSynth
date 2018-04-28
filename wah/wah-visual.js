function Visualiser() {
    this.fft = new p5.FFT();

    this.draw = function () {
        let waveform = this.fft.waveform();  // analyze the waveform
        beginShape();
        noFill();
        strokeWeight(5);
        stroke("#ff4d4d")
        for (var i = 0; i < waveform.length; i++) {
            let x = map(i, 0, waveform.length, 0, width);
            let y = map(waveform[i], -1, 1, height, 0);
            vertex(x, y);
        }
        endShape();
        

    }
}