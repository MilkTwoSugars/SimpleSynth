function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
    initialiseSound();
}

function draw() {

}

function getDistance(element) {
    return float(dist(mouseX, mouseY, element.x, element.y));
}

function mouseDragged() {

    let yVal = map(mouseY, 0, windowHeight, 50, 500);
    let xVal = map(mouseX, 0, windowWidth, 0, 10);

    updateSound(xVal, yVal, 1200, 12, 1100);
    drawCircle();
    return false;
}

function touchMoved() {
    let yVal = map(mouseY, 0, windowHeight, 50, 500);
    let xVal = map(mouseX, 0, windowWidth, 0, 10);

    updateSound(xVal, yVal, 1200, 12, 1100);
    drawCircle();
    return false;
}

function drawCircle() {
    background(50);
    noStroke();
    fill("#ff4d4d")
    ellipse(mouseX, mouseY, 150, 150)
}
