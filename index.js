//Import inquirer
const inquirer = require("inquirer");
//Require Filey System Module
const fs = require("fs");
//Import Shape Classes
const { Triangle, Square, Circle } = require("./lib/shapes.js");

function writeToFile(fileName, data) {
    let svgString = "";
    //set width and height
    svgString = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    //set user shape choice
    svgString = `${data.shape}`;

    let shapeChoice
    if (data.shape === "Circle") {
        shapeChoice = new Circle();
        svgString = `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}"/>`;
    } else if (data.shape === "Square") {
        shapeChoice = new Square();
        svgString = `<rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}"/>`;
    } else {
        shapeChoice = new Triangle();
        svgString = `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
    }

    //text
    svgString = `<text x="150" y="130" text-anchor="middle" font-size="30" fill="${data.textColor}">${data.text}</text>`;
    svgString = "</svg";
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
                message: "Please enter a color or hexadecimal number to choose your text color.",
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
                message: "Please enter a color or hexadecimal number to choose the color of your shape.",
                name: "shapeColor"
            }
        ])
        .then((data) => {
            if (data.text.length > 3) {
                console.log("Can only enter up to 3 characters.");
                promptUser();
            } else {
                writeToFile("./examples/logo.svg", data);
            }
        });
}

//run program
promptUser();