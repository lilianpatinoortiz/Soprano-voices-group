// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "characters",
    message: "Please provide 3 characters",
    default: "svg",
    validate(answer) {
      return answer.length <= 3 ? true : "Unvalid input, try again please.";
    },
  },
];

module.exports = questions;
