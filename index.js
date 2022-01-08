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
        message: 'GitHub Username: : ',
        name: 'Git'
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
        type: 'input',
        message: 'License: ',
        name: 'License',
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
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
