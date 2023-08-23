const { Circle, Triangle, Square } = require("./shapeClass.js");

// Function to generate the svg image
function generateSVG({ text, textColor, shape, shapeColor }) {
  const shapeElement =
    shape == "circle"
      ? new Circle(text, textColor)
      : shape == "square"
      ? new Square(text, textColor)
      : new Triangle(text, textColor);
  const backgroundElement = new Square();
  shapeElement.setColor(shapeColor);
  backgroundElement.setColor("white");

  return `
    ${shapeElement.getOpenTag()}

    ${backgroundElement.render()}

    ${shapeElement.render()}

    ${shapeElement.getClosingTag()}
    `;
}

// exporting the function
module.exports = generateSVG;
