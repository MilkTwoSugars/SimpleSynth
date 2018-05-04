var waveController;

function setup() {
    createCanvas(windowWidth, windowHeight);
    initialiseSliders();
    initialiseWaveController();
}

function draw() {
    background(50);
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].drawSlider(getDistance(sliders[i]))
    }
    waveController.drawButton();
}

function mousePressed() {
    checkAudioContext()
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].mouseClick(getDistance(sliders[i]))
    }
    waveController.mouseClick(getDistance(waveController));
}

function mouseReleased() {

    for (var i = 0; i < sliders.length; i++) {
        sliders[i].mouseRelease();
    }
}

function getDistance(element) {
    return float(dist(mouseX, mouseY, element.x, element.y));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initialiseSliders();
    initialiseWaveController();
  }






