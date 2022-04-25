// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
    ${}
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "Apache": 
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case "Boost":
        return '(https://www.boost.org/LICENSE_1_0.txt)';
    case "BSD":
        return '(https://opensource.org/licenses/BSD-3-Clause)';
    case "Creative Commons":
        return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case "Eclipse":
        return '(https://opensource.org/licenses/EPL-1.0)';
    case "GNU":
        return '(https://www.gnu.org/licenses/gpl-3.0)';
    case "The Organization for EthicalSource":
        return '(https://firstdonoharm.dev)';
    case "IBM":
        return '(https://opensource.org/licenses/IPL-1.0)';
    case "ISC":
        return '(https://opensource.org/licenses/ISC)';
    case "MIT":
        return '(https://opensource.org/licenses/MIT)';
    case "Mozilla":
        return '(https://opensource.org/licenses/MPL-2.0)';
    case "Open Data Commons":
        return '(https://opendatacommons.org/licenses/by/)';
    case "Perl":
        return '(https://opendatacommons.org/licenses/pddl/)';
    case "SIL":
        return '(https://opensource.org/licenses/OFL-1.1)';
    case "Unlicense":
        return '(http://unlicense.org/)';
    case "WTFPL":
        return '(http://www.wtfpl.net/about/)';
    case "Zlib":
        return '(https://opensource.org/licenses/Zlib)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
// MAD GAB THE README
function generateMarkdown(data) {
  return `
    # ${data.projectTitle} 
      ${data.projectDescription}
      ${data.githubRepo}
      ${data.url}
      ${data.githubName}
      ${data.emailAddress}
      ${data.references}
      ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
