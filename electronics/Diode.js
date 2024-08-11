import {Component} from "./Component.js";
import {drawCircle} from "../drawing.js";

export class Diode extends Component {
    draw(size, ctx, {sideRatio = 1.25, componentMargin = 7    , wireLineWidth= 3, componentLineWidth = 5, color = '#000000', markPoints= false, markIndividualPoints= false} = {}) {
        const wireLength = Math.sqrt(Math.pow(Math.abs(this.startNode.x-this.endNode.x), 2)+Math.pow(Math.abs(this.startNode.y-this.endNode.y), 2))
        const diodeLength = (size > wireLength/3) ? wireLength/3 : size;
        const diodeWidth = diodeLength / sideRatio;

        let diodeX = this.startNode.x - (this.startNode.x-this.endNode.x)/2;
        let diodeY = this.startNode.y - (this.startNode.y-this.endNode.y)/2;
        // diodeX = 400;
        // diodeY = 200;
        let angle = Math.atan2(this.startNode.x-this.endNode.x, this.startNode.y-this.endNode.y);



        let points = [
            [diodeX + diodeLength*Math.sin(angle)/2 + diodeWidth*Math.cos(angle)/2,
             diodeY + diodeLength*Math.cos(angle)/2 - diodeWidth*Math.sin(angle)/2],
            [diodeX + diodeLength*Math.sin(angle)/2 - diodeWidth*Math.cos(angle)/2,
             diodeY + diodeLength*Math.cos(angle)/2 + diodeWidth*Math.sin(angle)/2],
            [diodeX - diodeLength*Math.sin(angle)/2,
             diodeY - diodeLength*Math.cos(angle)/2],
            [diodeX - diodeLength*Math.sin(angle)/2 + diodeWidth*Math.cos(angle)/2,
             diodeY - diodeLength*Math.cos(angle)/2 - diodeWidth*Math.sin(angle)/2],
            [diodeX - diodeLength*Math.sin(angle)/2 - diodeWidth*Math.cos(angle)/2,
             diodeY - diodeLength*Math.cos(angle)/2 + diodeWidth*Math.sin(angle)/2],
            [diodeX + diodeLength*Math.sin(angle)/2,
             diodeY + diodeLength*Math.cos(angle)/2],
        ]

        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.moveTo(points[3][0], points[3][1]);
        ctx.lineTo(points[4][0], points[4][1]);
        ctx.closePath();

        ctx.lineWidth = componentLineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.startNode.x, this.startNode.y);
        ctx.lineTo(points[5][0] + componentMargin*Math.sin(angle), points[5][1] + componentMargin*Math.cos(angle));
        ctx.moveTo(points[2][0] - componentMargin*Math.sin(angle), points[2][1] - componentMargin*Math.cos(angle));
        ctx.lineTo(this.endNode.x, this.endNode.y);
        ctx.closePath();

        ctx.lineWidth = wireLineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();

        if (markPoints) {
            points.forEach(point => {
            const [x, y] = point;
            drawCircle(x, y, 6, '#ff0000', ctx)});
            drawCircle(diodeX, diodeY, 6, '#000000', ctx);
        }

        if (markIndividualPoints) {
            drawCircle(points[0][0], points[0][1], 6, '#ff0000', ctx)
            drawCircle(points[1][0], points[1][1], 6, '#00ff00', ctx)
            drawCircle(points[2][0], points[2][1], 6, '#0000ff', ctx)
            drawCircle(points[3][0], points[3][1], 6, '#ffd059', ctx)
            drawCircle(points[4][0], points[4][1], 6, '#ffd059', ctx)
            drawCircle(points[5][0], points[5][1], 6, '#0000ff', ctx)
            drawCircle(diodeX, diodeY, 6, '#000000', ctx)
        }
    }
}
