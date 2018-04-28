var visualiser;
var slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
    visualiser = new Visualiser();
    slider = new Slider(150, "#ff4d4d")
}

function draw() {
    background(50);
    visualiser.draw();
    slider.draw();
    updateSound(slider.x, slider.y);
}

function touchStarted() {
    checkAudioContext();
    slider.click(getDistance(slider));
    return false;
}

function touchEnded() {
    slider.release();
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
