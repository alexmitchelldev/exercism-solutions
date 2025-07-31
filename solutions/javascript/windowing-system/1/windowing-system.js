// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size (width, height) {
    this.width  = (width === undefined ? 80 : width);
    this.height = (height === undefined ? 60 : height);
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width  = newWidth;
    this.height = newHeight;
}

export function Position (x, y) {
    this.x = (x === undefined ? 0 : x);
    this.y = (y === undefined ? 0 : y);
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = {
            width: 800,
            height: 600
        },
        this.size = new Size,
        this.position = new Position
    }

    resize (newSize) {
        this.size.width   = (newSize.width < 1 ? 1 : newSize.width > this.screenSize.width ? (this.screenSize.width - this.position.x) : newSize.width);
        this.size.height  = (newSize.height < 1 ? 1 : newSize.height > this.screenSize.height ? (this.screenSize.height - this.position.y) : newSize.height);
    }

    move (newPosition) {
        const xDifference = (this.size.width + newPosition.x - this.screenSize.width);
        const yDifference = (this.size.height + newPosition.y - this.screenSize.height);

        this.position.x = (newPosition.x < 0 ? 0 : xDifference > 0 ? newPosition.x - xDifference : newPosition.x);
        this.position.y = (newPosition.y < 0 ? 0 : yDifference > 0 ? newPosition.y - yDifference : newPosition.y);
    }
}

export const changeWindow = programWindow => {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));

    return programWindow;
};