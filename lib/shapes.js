// The application must include Triangle, Circle, and Square classes
// While not a requirement, it is recommended that you place any common
//functionality and properties shared by the Triangle, Circle, and Square
// classes in a parent Shape class and use inheritance to reuse the code
// in the child classes.
class Shape {
  constructor(color) {
    this.color = color;
    this.setColor = function (color) {
      this.color = color;
    };
    this.getColor = function () {
      return this.color;
    };
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
    this.renderElement = function () {
      return `<rect width="100%" height="100%" fill="${this.getColor()}" />`;
    };
  }
}
class Circle extends Shape {
  constructor(color) {
    super(color);
    this.setColor(color);
    this.renderElement = function () {
      return `<circle cx="150" cy="120" r="100" fill="${this.getColor()}" />`;
    };
  }
}
class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.setColor(color);
    this.renderElement = function () {
      return `<polygon points="150 0, 300 180, 10 180" fill="${this.getColor()}"/>`;
    };
  }
}

module.exports = { Circle, Triangle, Square };
