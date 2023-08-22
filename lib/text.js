function Text(text, textColor) {
  this.text = text;
  this.textColor = textColor;
  this.render = function () {
    return `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`;
  };
}

module.exports = { Text };
