const { Text } = require("../lib/textClass");

describe("Text", () => {
  describe("create a text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("OOO", "black");
      expect(text.render()).toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="black">OOO</text>`
      );
    });
  });

  describe("create a text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("LPO", "pink");
      expect(text.render()).toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="pink">LPO</text>`
      );
    });
  });

  describe("create a text", () => {
    it("should create a text with the specified color and chars", () => {
      const text = new Text("VJS", "blue");
      expect(text.render()).toEqual(
        `<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">VJS</text>`
      );
    });
  });
});
