const { Circle } = require("./Circle");
const { Quadrilateral } = require("./Quadrilateral");

const radius = 12;
const width = 50;
const height = 75;

console.log(`Quadrilateral ${width}x${height}`)
console.log("- Area:", Quadrilateral.getArea(width, height));
console.log("- Perimeter:", Quadrilateral.getPerimeter(width, height));

console.log("\n");

console.log(`Circle r = ${radius}`)
console.log("- Area:", Circle.getArea(width, height));
console.log("- Perimeter:", Circle.getPerimeter(width, height));