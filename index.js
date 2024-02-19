const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Provide a description of the project.",
  },
  {
    name: "installation",
    type: "input",
    message: "Provide instructions for installation.",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide instructions for usage.",
  },
  {
    name: "contribution",
    type: "input",
    message: "Provide instructions for contribution.",
  },
  {
    name: "test",
    type: "input",
    message: "Provide instructions for testing.",
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license for your project.",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    name: "github",
    type: "input",
    message: "Enter your GitHub username.",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("./utils/README.md", generateMarkdown(response));
    console.log("Successfully created README.md file");
  });
}

// function call to initialize program
init();
