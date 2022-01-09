// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title: ',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Installation steps: ',
        name: 'Install'
    },
    {
        type: 'input',
        message: 'Usage: ',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Contributors: ',
        name: 'Contribute'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What is Your Project License?',
        choices: [
            'MIT',
            'GPL 3.0',
            'Apache 2.0',
            'BSD 3',
            'ISC',
            'Unlicense'
        ]
    },
    {
        type: 'input',
        message: 'Tests: ',
        name: 'Test'
    },
    {
        type: 'input',
        message: 'GitHub Username: ',
        name: 'Git'
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'Questions about your project: ',
        name: 'Questions'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const title = `# ${data.Title}\n`; 
        const description = `\n## Description \n ${data.Description} \n`;
        const contents = 
        `## Table Of Contents
        [Installation](#Installation)
        [Usage](#Usage)
        [License](#License)
        [Contributors](#Contributors)
        [Tests](#Tests)
        [Questions](#Questions)
        `;
        const install = `\n ## Installation \n ${data.Install}\n`;
        const usage = `## Usage \n ${data.Usage}\n`;
        const license = `## License \n ${data.License}\n`;
        const contr = `## Contributors \n ${data.Contribute}\n`;
        const test = `## Tests \n ${data.Test}\n`;
        const questions = `## Questions \n GitHub Username: ${data.Git} GitHub Link: https://github.com/${data.Git} \n Email: ${data.Email} \n${data.Questions}`;

        const genmd = title + description + contents + install + usage + license + contr + test + questions;  

        fs.writeFile(fileName, genmd , (err) =>
            err ? console.log(err) : console.log('README.md Creation Success!')
            );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const filename = "READMEtest.md";
        writeToFile(filename, data);
    });
}

// Function call to initialize app
init();



/* title of my project and sections entitled Description, 
Table of Contents, Installation, Usage, 
License, Contributing, Tests, and Questions*/