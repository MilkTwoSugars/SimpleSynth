var sliders = [];
var sliderSpacing = 350;
var sliderHeight = 650;
var sliderTopMargin = 100;
var sliderSize = 100;
var sliderStartingOffset = 100;


function initialiseSliders() {
    sliders.push(new Slider(sliderSpacing, sliderTopMargin + sliderStartingOffset, sliderSize, sliderSize, "ellipse", "orangered"));
    sliders.push(new Slider(sliderSpacing * 2, sliderTopMargin + sliderStartingOffset, sliderSize, sliderSize, "rect", "deepskyblue"));
    sliders.push(new Slider(sliderSpacing * 3, sliderTopMargin + sliderStartingOffset, sliderSize, sliderSize, "ellipse", "yellow"));
    sliders.push(new Slider(sliderSpacing * 4, sliderTopMargin + sliderStartingOffset, sliderSize, sliderSize, "rect", "forestgreen"));
}

function Slider(xPos, yPos, shapeWidth, shapeHeight, shapeType, shapeColour) {

    this.x = xPos;
    this.y = yPos;
    this.w = shapeWidth;
    this.h = shapeHeight;

    this.dragging = false;
    this.rollover = false;

    this.colour = shapeColour;
    this.shape = shapeType;

    this.line = {
        x: xPos,
        y: sliderTopMargin,
        x2: xPos,
        y2: sliderTopMargin + sliderHeight
    }

    this.drawSlider = function (distance) {

        stroke(100);
        line(this.line.x, this.line.y, this.line.x2, this.line.y2)

        if (distance < 50) {
            this.rollover = true
        }
        else {
            this.rollover = false;
        }

        // Adjust location if being dragged
        if (this.dragging) {
            this.y = mouseY;
            if (this.y > (sliderTopMargin + sliderHeight)) {
                this.y = (sliderTopMargin + sliderHeight)
            } else if (this.y < sliderTopMargin) {
                this.y = sliderTopMargin;
            }
        }

        noStroke();
        // Different fill based on state
        if (this.dragging) {
            fill(this.colour);
        } else if (this.rollover) {
            fill(this.colour);
        } else {
            fill(this.colour);
        }

        if (this.shape === "ellipse") {
            ellipse(this.x, this.y, this.w, this.h);
        } else if (this.shape === "rect") {
            rectMode(CENTER)
            rect(this.x, this.y, this.w, this.h);
        } else if (this.shape === "triangle") {
            triangle(this.x, this.y, this.x * 2, this.y / 2, this.x * 3, this.y / 3);
        }
    }

    this.mouseClick = function (distance) {
        if (distance < 50) {
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
        }

        this.mouseRelease = function () {
            this.dragging = false;
        }
    }

}