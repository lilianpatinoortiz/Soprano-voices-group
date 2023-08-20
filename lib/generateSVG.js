const { Text } = require("./text.js");
const { Circle, Triangle, Square } = require("./shapes.js");

// Function to generate the svg image
function generateSVG({ text, textColor, shape, shapeColor }) {
  const textElement = new Text(text, textColor);
  const shapeElement = new Circle(shapeColor);
  return ` 
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="red" />

    ${shapeElement.renderElement()}

     ${textElement.renderElement()}

    </svg>`;
}

// exporting the function
module.exports = generateSVG;
