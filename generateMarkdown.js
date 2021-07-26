// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === 'ISC') {
    const licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  else if (data.license === 'MIT') {
    const licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (data.license === 'GNU General Public License') {
    const licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (data.license === 'Apache') {
    const licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (data.license === 'BSD') {
    const licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else {
    const licenseBadge = ' ';
  }
};

renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === 'ISC') {
    const licenseLink = '[ISC](https://opensource.org/licenses/ISC)';
  }
  else if (data.license === 'MIT') {
    const licenseLink = '[MIT](https://opensource.org/licenses/MIT)';
  }
  else if (data.license === 'GNU General Public License') {
    const licenseLink = '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (data.license === 'Apache') {
    const licenseLink = '[Apache](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (data.license === 'BSD') {
    const licenseLink = '[BSD](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else {
    const licenseLink = ' ';
  }
};



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  Licensed under the ${licenseLink} license.
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `
  # ${data.title}
  licenseBadge
  ## Description
  ${data.description}
  ## Installation
  ${data.enterInstallation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## If You Have Questions
  If you want to know more about the README generator, contact me on ${data.github} or by email at ${data.email}.
  ${renderLicenseSection(license)}
`;
};

module.exports = generateMarkdown;