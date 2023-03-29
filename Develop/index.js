// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is project title?',
    name:'title'
},
{
    type:'list',
    message:'What license do you want on project?',
    name:'license',
    choices:['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License']
},
{
    type:'input',
    messsage:'What is your Github username',
    name:'username'
},
{
    type:'input',
    message:'What is your email?',
    name:'email'
},
{
     type:'input',
    message:'What sections do you want?',
    name:'sections'

 }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
        writeToFile('README.md',utils(response))
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

}

// Function call to initialize app
init();





