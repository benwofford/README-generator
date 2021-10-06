// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs").promises;
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
 const questions = [
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message:
          "Provide a short description explaining the purpose of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "List the appropriate sections to build the Table of Contents.",
        name: "table",
      },
      {
        type: "input",
        message: "Describe the steps required to install your project.",
        name: "installation",
      },
      {
        type: "input",
        message: "What are some best practices for usage?",
        name: "usage",
      },
      {
        type: "list",
        message: "Please choose an applicable license for your project.",
        name: "license",
        choices: ["MIT", "Apache", "none"]
      },
      {
        type: "input",
        message: "May others contribute to this project? If so, how?",
        name: "contributing",
      },
      {
        type: "input",
        message: "Describe the tests you have run for your application.",
        name: "tests",
      },
      {
        type: "input",
        message: "Please enter your github username and email.",
        name: "questions",
      },
    ];

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
  
    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}
    .then(
      (answers) => {
        return fs.writeFile(
          `README.md`,
          generateMarkdown(answers),      
        );
      }
    )
    .then(() => console.log("Enjoy your README!"))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
