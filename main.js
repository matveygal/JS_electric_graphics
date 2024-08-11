import {Node} from "./electronics/Node.js";
import {Diode} from "./electronics/Diode.js";
import {Resistor} from "./electronics/Resistor.js";
import {drawCircle} from "./drawing.js";

const canvas = document.getElementById('canvas')
export const ctx = canvas.getContext('2d')


let nodes = [
    new Node(400, 350), new Node(750, 100),
    new Node(1100, 350)]
nodes.forEach(node => {drawCircle(node.x, node.y, 6, '#000000', ctx)});

let resi = new Resistor(nodes[0], nodes[1])
let didi = new Diode(nodes[1], nodes[2])
resi.draw(100, ctx)
didi.draw(100, ctx)
