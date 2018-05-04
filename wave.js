function initialiseWaveController() {
    waveController = null;
    let size = windowWidth / 15
    waveController = new WaveController(windowWidth - size, windowHeight - size, size, size);
}

function WaveController(xPos, yPos, buttonHeight, buttonWidth) {

    this.waveType = "sine";
    this.waveColour = "deepskyblue";

    this.x = xPos;
    this.y = yPos;
    this.h = buttonHeight;
    this.w = buttonWidth;

    this.drawButton = function () {
        fill(this.waveColour);
        rectMode(CENTER);
        rect(this.x, this.y, this.h, this.w);
    }

    this.mouseClick = function (distance) {
        if (distance < this.w / 2) {
            this.changeWaveType();
        }
    }

    this.changeWaveType = function () {
        this.waveType = this.waveTypeCycle(this.waveType);
    }



    this.waveTypeCycle = function (type) {
        switch (type) {
            case "sine":
                console.log("Changing to sawtooth");
                this.waveColour = 'firebrick';
                return "sawtooth";
            case "sawtooth":
                console.log("Changing to triangle");
                this.waveColour = 'darkorange';
                return "triangle";
            case "triangle":
                console.log("Changing to square");
                this.waveColour = 'mediumseagreen';
                return "square";
            case "square":
                console.log("Changing to sine");
                this.waveColour = 'deepskyblue';
                return "sine";
        }
    }
}
