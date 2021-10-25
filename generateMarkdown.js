// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    // badges from shields.io as mentioned in GitHub guide to READMEs 
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

  Licensed under the ${license} license.
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ${renderLicenseLink(data.license)}
  
  ## Installation

  Type ${data.installation} to install any packages needed for your project.

  ## Usage

  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  To perform any tests, just type ${data.test}.
  
  ## Questions
  
  If you want to know more about the README generator, view my GitHub at [https://github.com/${data.github}](https://github.com/${data.github}) or contact me by email at ${data.email}.
    
  ${renderLicenseSection(data.license)}

`;
};

module.exports = generateMarkdown;