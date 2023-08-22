const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Triangle", () => {
  describe("create triangle", () => {
    it("should create a triangle with blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});

describe("Circle", () => {
  describe("create triangle", () => {
    it("should create a triangle with pink background", () => {
      const shape = new Circle();
      shape.setColor("pink");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="130" r="100" fill="pink" />'
      );
    });
  });
});

describe("Square", () => {
  describe("create triangle", () => {
    it("should create a triangle with black background", () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<rect width="100%" height="100%" fill="black" />'
      );
    });
  });
});
