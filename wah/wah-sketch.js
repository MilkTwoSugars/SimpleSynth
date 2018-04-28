var visualiser;
var slider1;
var slider2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
    visualiser = new Visualiser();
    slider1 = new Slider(100, 100, 150, "#009999");
    slider2 = new Slider(500, 500, 100, "#66d9ff");
}

function draw() {
    background(50);
    visualiser.draw();
    slider1.draw();
    slider2.draw();
    updateSound(slider1.x, slider1.y, slider2.x, slider2.y);
}

function touchStarted() {
    checkAudioContext();
    slider1.click(getDistance(slider1));
    slider2.click(getDistance(slider2));
    return false;
}

function touchEnded() {
    slider1.release();
    slider2.release();
    return false;
}

function checkAudioContext() {
    if (!soundStarted) {
        getAudioContext().resume().then(() => {
            initialiseSound();
            soundStarted = true;
        });
    }
}

function getDistance(element) {
    return float(dist(mouseX, mouseY, element.x, element.y));
}

// function mouseClicked() {
//     checkAudioContext();
//     slider.click(getDistance(slider));
//     return false;
// }

// function mouseReleased() {
//     slider.release();
//     return false;
// }

// function touchMoved() {
//     checkAudioContext();
//     slider.click();
//     return false;
// }
