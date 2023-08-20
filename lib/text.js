function Text(text, textColor) {
  this.text = text;
  this.textColor = textColor;
  this.setTextColor = function () {};
  this.renderElement = function () {
    return `
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>
          
          `;
  };
}

module.exports = { Text };
