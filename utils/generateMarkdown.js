// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if (license === 'Apache') {
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} else (license === 'none')
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      const mit = "MIT";
      //const mitLink = mit.link("https://www.mit.edu/~amini/LICENSE.md");
      return mit;
  } else if (license === 'Apache') {
      const apache = "Apache";
      //const apacheLink = apache.link("https://www.apache.org/licenses/LICENSE-2.0");
      return apache;
  } return ''
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  table,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
}) {
  return
  `# ${title} #
${renderLicenseBadge(license)};

## Description ##
${description}

## Table of Contents ##
${table}

## Installation ##
${installation}

## Usage ##
${usage}

## License ##
${renderLicenseLink(license)}

## Contribute ##
${contributing}

## Tests ##
${tests}

## Questions ##
Any questions? Find me on Github! Shoot me an email!
${questions}
`
};

module.exports = generateMarkdown;
