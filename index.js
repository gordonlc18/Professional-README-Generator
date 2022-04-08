// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project?:',
        validate: titleInput => {
            return titleInput? true: 
            console.log ('Please enter your project title');
            return false;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project?:',
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
        validate: usageInput => {
            if (usageInput) {
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
        name: 'github',
        message: 'Please enter your GitHub username.',
        validate: urlInput=> {
            if (urlInput) {
                return true; 
            } else {
                console.log ('You must enter a Github Link');
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
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        
        if (err) {
            console.log(err);
            return;
        // After README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 
// TODO: Create a function to initialize app
function init() {
    console.log(`
    =============================================
               Create a New README File
    =============================================
    `);
    return inquirer.prompt(questions)
}
    

// Function call to initialize app
init()
.then(answers => {
    return generateMarkdown(answers);
  })
  .then(data => {
      return writeFile (data);
  })

    
  .catch( err => {
    console.log(err);
  });