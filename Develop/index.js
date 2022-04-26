// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [  
 //Description in table of contents
    {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the project title?'
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Please enter a description of the project?'
  },
  {    
    type: 'input',
    name: 'githubRepo',
    message: 'Please enter Github Repo URL.'
  },  
  { 
      type: 'input',
      name: 'url',
      message: 'Please enter the URL of your website.'
  },    
  //Installation in table of contents
  {    
      type: 'input',
      name: 'installation',
      message: 'Please describe how to install the file'
  },
  //contact information in table of contents
  {
    type: 'input',
    name: 'githubName',
    message: 'What is your GitHub username?'  
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?'
  },
  //references in table of contents
  {
    type: 'input',
    name: 'references',
    message: 'Please list your references or any collaborators.' 
  },
  // license in table of contents 
  {
    type: 'list',
    name: 'license',
    message: "What type of license are you using?",  
    choices: ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "The Organization for Ethical Source", "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib"] 
  },
];

// TODO: Create a function to write README file
const fs = require('fs'); 
  fs.writeFile('./Desktop/README.md', generateMarkdown.data, function(err, result){
    if (err) console.log('error', err);
  })


// TODO: Create a function to initialize app
function init() {

console.log("\n Welcome to the professional README.md generator! \n")

inquirer
    .prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers)
        writeToFile("generatedREADME.md", markdown)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
        console.log("Sorry something went wrong :( ")
        console.log(error)
      }
    });
  
}

// Function call to initialize app
init();
