// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project:',
        validate: titleInput => {
            return titleInput? true: 
            console.log ('Please enter your project title');
            return false;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true; 
            } else {
                console.log ('You must enter a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions:',
        validate: installationInput => {
            if (installationInput) {
                return true; 
            } else {
                console.log ('You must enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage instructions:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true; 
            } else {
                console.log ('You must enter a project description');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project:',
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
            "No License",
        ],
        
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter the Github Username:',
        validate: githubUsername => {
            if (githubUsernameInput) {
                return true; 
            } else {
                console.log ('You must enter a Github Username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address:',
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log ('You must enter an email address');
                return false;
        }
    }
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    readmeMarkdown = generateMarkdown (data);
    fs.writeFile (fileName, readmeMarkdown, err =>{
        if (err){
            console.log (err);
            return;
        }
        console.log('Readme.md created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
    =============================================
    Create a New README File
    =============================================
    `);
    return inquirer.prompt(questions)
    .then (answersData => {
        writeToFile('./dist/README.md', answersData);
    }) .catch (err => {
        console.log (err);
    });

}

// Function call to initialize app
init();
