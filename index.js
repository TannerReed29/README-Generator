    // Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

    // Create an array of questions for user input
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

    // Create a function to write README file
function writeToFile(fileName, data) 
{
    // Title of Project and Badge for that License
    const title = `# ${data.Title} ${generate.renderLicenseBadge(data.License)}\n `;
    // Section titled Description 
    const description = `\n## Description \n ${data.Description} \n`;
    // Table of Contents
    const contents = 
`## Table Of Contents
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributors](#contributors)\n
[Tests](#tests)\n
[Questions](#questions)
`;

    // Installation Instructions Section
    const install = `\n ## Installation \n ${data.Install}\n`;
    // Usage Info Section
    const usage = `## Usage \n ${data.Usage}\n`;
    // Licence section wwith licence badge  and licence section info 
    const license = `## License \n ${generate.renderLicenseBadge(data.License)} \n ${generate.renderLicenseSection(data.License,data.Name)}\n`;
    // Contributors Section
    const contr = `## Contributors \n ${data.Contribute}\n`;
    // Tests Section
    const test = `## Tests \n ${data.Test}\n`;
    // Questions Section Containing GitHub Username, Profile Link, and Email. Followed by Questions  
    const questions = `## Questions \n GitHub Username: ${data.Git} \n GitHub Link: https://github.com/${data.Git} \n Email: ${data.Email} \n ${data.Questions}`;

    // All markdown sections together 
    const genmd = title + description + contents + install + usage + license + contr + test + questions;  

    fs.writeFile(fileName, genmd , (err) =>
        err ? console.log(err) : console.log('README.md Creation Success!')
        );
}

    // Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const filename = "README.md";
        //const filename = "READMEsample.md";
        writeToFile(filename, data);
    });
}

    // Function call to initialize app
init();


