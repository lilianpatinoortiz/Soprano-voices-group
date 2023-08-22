const { Text } = require("../lib/textClass");

describe("Text", () => {
  // accurate tests
  describe("create a black text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("OOO", "black");
      expect(text.render()).toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="black">OOO</text>`
      );
    });
  });

  describe("create a pink text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("LPO", "pink");
      expect(text.render()).toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="pink">LPO</text>`
      );
    });
  });

  describe("create a blue text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("VJS", "blue");
      expect(text.render()).toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">VJS</text>`
      );
    });
  });

  // negative tests
  describe("create a blue text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("VJS", "white");
      expect(text.render()).not.toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">VJS</text>`
      );
    });
  });

  describe("create a blue text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("LOV", "green");
      expect(text.render()).not.toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">VJS</text>`
      );
    });
  });
});
