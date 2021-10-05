// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a short description explaining the purpose of your project.",
      name: "description",
    },
    {
        type: "input",
        message: "List the appropriate sections to build the Table of Contents.",
        name: "table-of-contents",
      },
    {
      type: "input",
      message: "Describe the steps required to install your project.",
      name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
      },
    {
        type: "list",
        message: "Please choose an applicable license for your project.",
        name: "license",
      },
      {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "Describe the tests have you run for your application.",
        name: "tests",
      },
      {
        type: "input",
        message: "Please enter any questions.",
        name: "questions",
      },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
