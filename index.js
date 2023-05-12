const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
    .prompt([
        {
            type: "input",
            message: "Please enter the text you would like your logo to display? You may enter up to three characters.",
            name: "text"
        },
        {
            type: "input",
            message: "Please choose text color.", //needs to be able to enter a color keyword or a hexadecimal number
            name: "textColor"
        },
        {
            type: "list",
            message: "Please choose from the following list which shape you would like your logo to be.",
            chocies: ["Triangle", "Square", "Circle"],
            name: "shape"
        },
        {
            type: "input",
            message: "What color would you like the shape to be?", //needs to be able to enter a color keyword or a hexadecimal number
            name: "shapeColor"
        }
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Can only enter up to 3 characters.");
            promptUser();
        } else {
            writeToFile("logo.svg", answers);
        }
    });
}

promptUser();