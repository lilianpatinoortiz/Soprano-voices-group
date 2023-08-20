// The application must include Triangle, Circle, and Square classes
// While not a requirement, it is recommended that you place any common
//functionality and properties shared by the Triangle, Circle, and Square
// classes in a parent Shape class and use inheritance to reuse the code
// in the child classes.
class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Circle extends Shape {}
class Triangle extends Shape {}
class Square extends Shape {}

module.exports = { Circle, Triangle, Square };
