// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What will you call your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How will you best describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any specific installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'In what ways will this project be used?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Will this project include any testing instructions?',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'Should any commands be ran to invoke testing?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What username will this project be associated with?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email can we contact in regards to questions about this project?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Are there any licenses associated with this project?',
        choices: [ "None", "Apache 2.0", "Boost Software License 1.0", "BSD 3-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", 
        "The Hippocratic License 2.1", "IBM Public License Version 1.0", "ISC",  "MIT", "Mozilla Public License 2.0", "The Perl License",
        "SIL Open Font License 1.1", "The Unlicense", "Zlib"]
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data)
    fs.writeFile(fileName, fileData, (error) => error ? console.log(error) : console.log('Success'))
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    });
};
// Function call to initialize app
init();
