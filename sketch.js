var waveController;

function setup() {
    createCanvas(windowWidth, windowHeight);
    initialiseSliders();
    waveController = new WaveController(windowWidth - 100, windowHeight - 100, 100, 100);
}

function draw() {
    background(50);
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].drawSlider(getDistance(sliders[i]))
    }
    waveController.drawButton();
}

function mousePressed() {
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






