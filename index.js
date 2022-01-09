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
            'Unlicense',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Tests: ',
        name: 'Test'
    },
    {
        type: 'input',
        message: 'Enter Your First and Last Name ',
        name: 'Name'
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
/* title of my project and 
sections entitled Description, 
Table of Contents, Installation, Usage, 
License, Contributing, Tests, and Questions
THEN a badge for that license is added near the top of the 
README and a notice is added to the section of the README 
entitled License that explains which license the application 
is covered under*/
function writeToFile(fileName, data) 
{
    const title = `# ${data.Title} ${generate.renderLicenseBadge(data.License)}\n `; 
        const description = `\n## Description \n ${data.Description} \n`;
        const contents = 
`## Table Of Contents
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributors](#contributors)\n
[Tests](#tests)\n
[Questions](#questions)
`;
        const install = `\n ## Installation \n ${data.Install}\n`;
        const usage = `## Usage \n ${data.Usage}\n`;
        const license = `## License \n ${generate.renderLicenseBadge(data.License)} \n ${generate.renderLicenseSection(data.License,data.Name)}\n`;
        const contr = `## Contributors \n ${data.Contribute}\n`;
        const test = `## Tests \n ${data.Test}\n`;
        const questions = `## Questions \n GitHub Username: ${data.Git} \n GitHub Link: https://github.com/${data.Git} \n Email: ${data.Email} \n ${data.Questions}`;

        const genmd = title + description + contents + install + usage + license + contr + test + questions;  

        fs.writeFile(fileName, genmd , (err) =>
            err ? console.log(err) : console.log('README.md Creation Success!')
            );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const filename = "README.md";
        writeToFile(filename, data);
    });
}

// Function call to initialize app
init();


