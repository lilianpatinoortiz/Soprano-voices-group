const { Text } = require("./text.js");
const { Circle, Triangle, Square } = require("./shapes.js");

// Function to generate the svg image
function generateSVG({ text, textColor, shape, shapeColor }) {
  const textElement = new Text(text, textColor);
  const shapeElement =
    shape == "circle"
      ? new Circle(shapeColor)
      : shape == "square"
      ? new Square(shapeColor)
      : new Triangle(shapeColor);
  const backgroundElement = new Square("white");

  return ` 
    <svg version="1.1"
    width="300" height="250"
    xmlns="http://www.w3.org/2000/svg">

    ${backgroundElement.renderElement()}

    ${shapeElement.renderElement()}

     ${textElement.renderElement()}

    </svg>`;
}

// exporting the function
module.exports = generateSVG;
