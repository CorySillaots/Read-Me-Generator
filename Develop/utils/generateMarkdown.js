// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){ 
    switch(license){
    case "Apache":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case "Boost":
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    case "BSD":
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    case "Creative Commons":
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
    case "Eclipse":
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    case "GNU":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case "The Organization for Ethical Source":
        return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]`;
    case "IBM":
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
    case "ISC":
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
    case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case "Mozilla":
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    case "Open Data Commons":
        return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]`;
    case "Perl":
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
    case "SIL":
        return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]`;
    case "Unlicense":
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    case "WTFPL":
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`;
    case "Zlib":
        return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]`;
    default:
        return '';
            
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
    default:
        return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `
    # ${data.projectTitle} 
    ## Table Of Contents
    - [Description](#description)
    - [Installation]
    - [Contact Information]
    - [References]
    - [Licensing]

    ## Description <a name ='description'></a> 
      ${data.projectDescription}
      ${data.githubRepo}
      ${data.url}

    ## Installation
      ${data.installation}
    
    ## Contact Information  
      ${data.githubName}
      ${data.emailAddress}
    
    ## References  
      ${data.references}

    ## Licensing
      ${renderLicenseBadge(data.license)}
      ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
