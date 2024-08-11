import {Node} from "./electronics/Node.js";
import {Diode} from "./electronics/Diode.js";
import {Resistor} from "./electronics/Resistor.js";
import {drawCircle} from "./drawing.js";

const canvas = document.getElementById('canvas')
export const ctx = canvas.getContext('2d')


let nodes = [
    new Node(100, 350), new Node(350, 100),
    new Node(600, 350)]
nodes.forEach(node => {drawCircle(node.x, node.y, 6, '#000000', ctx)});

let resi = new Resistor(nodes[0], nodes[1])
let didi = new Diode(nodes[1], nodes[2])
resi.draw(100, ctx)
didi.draw(100, ctx)

let rectifierNodes = [new Node(700, 350), new Node(850, 200), new Node(1000, 350), new Node(850, 500)]
rectifierNodes.forEach(node => {drawCircle(node.x, node.y, 6, '#000000', ctx)});
let rectifierDiodes = [new Diode(rectifierNodes[0], rectifierNodes[1]), new Diode(rectifierNodes[1], rectifierNodes[2]), new Diode(rectifierNodes[0], rectifierNodes[3]), new Diode(rectifierNodes[3], rectifierNodes[2])]
rectifierDiodes.forEach(diode => {diode.draw(60, ctx)})