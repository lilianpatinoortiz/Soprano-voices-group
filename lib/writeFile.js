const fs = require("fs");

// Function to write the file
function writeToFile(fileName, data) {
  fs.writeFile("examples/" + fileName + ".svg", data, (err) =>
    err ? console.log(err) : console.log("Successfully created your svg!")
  );
}

module.exports = writeToFile;
