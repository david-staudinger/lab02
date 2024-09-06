import { newRenderer } from "./renderer.js"
import { rectangle } from "./shapes/rectangle.js";
import { circle } from "./shapes/circle.js"
import { square } from "./shapes/square.js"


const R: Shape = rectangle(2, 3)
const renderer0 = newRenderer(R)
renderer0.draw();

const C: Shape = circle(4)
const renderer1 = newRenderer(C)
renderer1.draw();

const S: Shape = square(9)
const renderer2 = newRenderer(S)
renderer2.draw();
