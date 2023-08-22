const { Text } = require("./textClass.js");
const { Circle, Triangle, Square } = require("./shapeClass.js");

// Function to generate the svg image
function generateSVG({ text, textColor, shape, shapeColor }) {
  const textElement = new Text(text, textColor);
  const shapeElement =
    shape == "circle"
      ? new Circle()
      : shape == "square"
      ? new Square()
      : new Triangle();
  const backgroundElement = new Square();
  shapeElement.setColor(shapeColor);
  backgroundElement.setColor("white");

  return `
    ${shapeElement.getOpenTag()}

    ${backgroundElement.render()}

    ${shapeElement.render()}

    ${textElement.render()}

    ${shapeElement.getClosingTag()}
    `;
}

// exporting the function
module.exports = generateSVG;
