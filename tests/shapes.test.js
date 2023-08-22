const { Circle, Triangle, Square } = require("../lib/shapeClass");

// accurate shape tests

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
  describe("create circle", () => {
    it("should create a circle with pink background", () => {
      const shape = new Circle();
      shape.setColor("pink");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="130" r="100" fill="pink" />'
      );
    });
  });
});

describe("Square", () => {
  describe("create square", () => {
    it("should create a square with black background", () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<rect width="100%" height="100%" fill="black" />'
      );
    });
  });
});

// negation shape tests

describe("Triangle", () => {
  describe("create triangle, not circle", () => {
    it("should create a triangle with blue background, and not a circle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).not.toEqual(
        '<circle cx="150" cy="130" r="100" fill="blue" />'
      );
    });
  });
});

describe("Triangle", () => {
  describe("create triangle, not square", () => {
    it("should create a triangle with blue background, and not a square", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).not.toEqual(
        '<rect width="100%" height="100%" fill="blue" />'
      );
    });
  });
});

describe("Circle", () => {
  describe("create circle, not triangle", () => {
    it("should create a circle with pink background, not a triangle", () => {
      const shape = new Circle();
      shape.setColor("pink");
      expect(shape.render()).not.toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
      );
    });
  });
});

describe("Circle", () => {
  describe("create circle, not square", () => {
    it("should create a circle with pink background, not a square", () => {
      const shape = new Circle();
      shape.setColor("pink");
      expect(shape.render()).not.toEqual(
        '<rect width="100%" height="100%" fill="pink" />'
      );
    });
  });
});

describe("Square", () => {
  describe("create square, not triangle", () => {
    it("should create a square with black background, not a triangle", () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).not.toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="black" />'
      );
    });
  });
});

describe("Square", () => {
  describe("create square, not circle", () => {
    it("should create a square with black background, not a circle", () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).not.toEqual(
        '<circle cx="150" cy="130" r="100" fill="black" />'
      );
    });
  });
});
