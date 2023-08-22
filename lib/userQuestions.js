// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter up to three characters",
    validate(answer) {
      // I can enter up to three characters
      return answer.length > 0 && answer.length <= 3
        ? true
        : "Invalid input, please try again.";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Please enter the text color",
    validate(answer) {
      //I can enter a color keyword (OR a hexadecimal number)
      return true;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Please enter the shape",
    choices: ["circle", "triangle", "square"],
    validate(answer) {
      //I select circle, triangle, or square
      return answer in ["circle", "triangle", "square"]
        ? true
        : "Invalid shape, please try again.";
    },
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Please enter the shape color",
    validate(answer) {
      //I can enter a color keyword (OR a hexadecimal number)
      return true;
    },
  },
];

module.exports = questions;
