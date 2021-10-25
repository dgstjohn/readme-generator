const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown.js');

// get the questions for the user

const questions = [
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
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
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
        type: 'input',
        name: 'installation',
        message: 'How are your packages installed for your project?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command is run to test your project?',
        default: 'npm test'
            
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will your project use?',
        choices: ['ISC', 'MIT', 'GNU General Public License', 'Apache', 'BSD', 'None'] 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any pertinent usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contribution guidelines for this project:'
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating README...');
        writeToFile('dist/README.md', generateMarkdown({ ...inquirerResponses }));
      });
}

// Function call to initialize app
init();