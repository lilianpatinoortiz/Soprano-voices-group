// Packages needed for this application
const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG.js");
const writeToFile = require("./lib/writeFile.js");
const userQuestions = require("./lib/userQuestions.js");

// Function to initialize app
function init() {
  inquirer.prompt(userQuestions).then((answers) => {
    const svgContent = generateSVG(answers);
    writeToFile(answers.characters, svgContent);
  });
}

// call initialization of the app
init();
