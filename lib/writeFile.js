const fs = require("fs");

// Function to write the file
function writeToFile(data) {
  // TODO: THEN an SVG file is created named `logo.svg`
  fs.writeFile("examples/logo.svg", data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}

module.exports = writeToFile;
