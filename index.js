//Import inquirer
const inquirer = require("inquirer");
//Require Filey System Module
const fs = require("fs");
//Import Shape Classes
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, data) {
    let svgString = "";
    //set width and height
    svgString = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    //set user shape choice
    svgString = `${data.shape}`;

    let shapeChoice
    if (data.shape === "Circle") {
        shapeChoice = new Circle();
    } else if (data.shape === "Square") {
        shapeChoice = new Square();
    } else {
        shapeChoice = new Triangle();
    }

    //text

    //write svg file
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

//collect user input
function promptUser() {
    inquirer
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
                choices: ["Triangle", "Square", "Circle"],
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

//run program
promptUser();