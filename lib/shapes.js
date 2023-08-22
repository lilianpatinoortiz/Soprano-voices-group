class Shape {
  constructor() {
    this.color;
    this.setColor = function (color) {
      this.color = color;
    };
    this.getColor = function () {
      return this.color;
    };
    this.getOpenTag = function () {
      return `<svg version="1.1"
                width="300" height="250"
                xmlns="http://www.w3.org/2000/svg">`;
    };
    this.getClosingTag = function () {
      return `</svg>`;
    };
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.render = function () {
      return `<rect width="100%" height="100%" fill="${this.getColor()}" />`;
    };
  }
}
class Circle extends Shape {
  constructor() {
    super();
    this.render = function () {
      return `<circle cx="150" cy="130" r="100" fill="${this.getColor()}" />`;
    };
  }
}
class Triangle extends Shape {
  constructor() {
    super();
    this.render = function () {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.getColor()}" />`;
    };
  }
}

module.exports = { Circle, Triangle, Square };
