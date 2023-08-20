// The application must include Triangle, Circle, and Square classes
// While not a requirement, it is recommended that you place any common
//functionality and properties shared by the Triangle, Circle, and Square
// classes in a parent Shape class and use inheritance to reuse the code
// in the child classes.
class Shape {
  constructor(color) {
    this.color = color;
    this.setColor = function () {};
  }
}
class Circle extends Shape {
  constructor(color) {
    super(color);
    this.renderElement = function () {
      return `
        <circle cx="150" cy="100" r="80" fill="green" />
         `;
    };
  }
}
class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.renderElement = function () {
      return `
          <circle cx="150" cy="100" r="80" fill="green" />
           `;
    };
  }
}
class Square extends Shape {
  constructor(color) {
    super(color);
    this.renderElement = function () {
      return `
      <rect width="100%" height="100%" fill="red" />
           `;
    };
  }
}

module.exports = { Circle, Triangle, Square };
