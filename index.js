// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Create a function to generate the README content
function generateReadme(data) {
  const licenseBadge = data.license !== 'None' ? `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)` : '';

  return `
# ${data.projectTitle}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For any additional questions, you can reach out to me via [GitHub](https://github.com/${data.githubUsername}) or email me at ${data.email}.
  `;
}

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
      console.log('README.md generated successfully!');
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();

