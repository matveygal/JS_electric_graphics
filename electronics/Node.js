import {drawCircle} from "../drawing.js";

export class Point {
     constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Node extends Point{
    draw(radius, color='#000000') {
        drawCircle(this.x, this.y, radius, color)
    }
}