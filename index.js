const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./generateMarkdown.js');
const writeFile = require('./generateSite.js');

// Prompt the user

const promptProject = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'installation',
            message: 'Are there specific installation instructions for your project?',
            default: false
        },
        {
            // if so, 
            type: 'input',
            name: 'enterInstallation',
            message: 'Please describe the installation requirements:',
            validate: enterInstallationInput => {
                if (enterInstallationInput) {
                    return true;
                } else {
                    console.log('You need to enter installation requirements!');
                    return false;
                }
            }
        }
    ])
}

const promptOther = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter any pertinent usage information:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter any contribution guidelines for this project:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter any instructions for testing:'
        }
    ])
}

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license will your project use?',
            choices: ['ISC', 'MIT', 'GNU General Public License', 'Apache', 'BSD', 'Other'] //if 'Other', provide prompt for that 
        }
        
    ])
}

promptProject()
.then(promptOther)
.then(promptQuestions)
.then(markdown => {
    return writeFile(markdown)
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => { // standard err catch at end
    console.log(err);
  });