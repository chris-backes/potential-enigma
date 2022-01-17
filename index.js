// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))
let fs = require("fs");

const licenses = ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License",, "BSD 2-Clause 'simiplfied' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Elipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public lIcense v2.1", "Mozilla Public License 2.0", "The Unilicense"]

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project/README?",
            validate: (titleInput) => {
                return !!titleInput
            }
        },
        {
            type: "input",
            name: "description",
            message: "Describe what you application does.",
            validate: (descriptionInput) => {
                return !!descriptionInput
            }
        },
        {
            type: "confirm",
            name: "confirmTOC",
            message: "Would you like to include a table of Contents?",
            default: true,
        },
        // {
        //     type: "input",
        //     name: "tableOfContents",
        //     message: "Please include the various "
        //     when: ({ confirmTOC }) => {
        //         return !!confirmTOC
        //     }
        // },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            validate: (installInput) => {
                return !!installInput
            }
        },
        {
            type: "confirm",
            name: "confirmMedia",
            message: "Would you like to include a screenshot or video in your README?",
            default: true,
        },
        // {
        //     type: "fuzzypath",
        //     name: "path",
        //     excludePath: nodePath => nodePath.startsWith("node_modules"),
        //     excludePath: nodePath => nodePath == ".",
        //     itemType: "file",
        //     message: "Type the name of your file. Possible directory matches will be listed",
        //     suggestOnly: false,
        //     depthLimit: 4,
        //     when: ({ confirmMedia }) => {
        //         return !!confirmMedia
        //     }
        // },
        {
            type: "list",
            name: "license",
            message: "Which license would you like this project under (select 'none' if you would not like to include one)?",
            choices: licenses,
        },
        {
            type: "input",
            name: "contibuting",
            message: "Please provide your own guidelines for contributing to this (or leave blank if you would like none). The default, 'Contributor Covenant Code of Conduct', will insert that covenant (see here: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt)",
            default: "Contributor Covenant Code of Conduct",
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide any tests the users can run on the application (Do not leave blank). Multiple tests should be separated by an underscore.",
            default: "At this point, there are no tests for the application",
            validate: (testsInput) => {
                return !!testsInput
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username",
            validate: (githubInput) => {
                return !!githubInput
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address",
            validate: (emailInput) => {
                return !!emailInput
            }
        }
    ])
}

// Function call to initialize app
init()
.then(initData => {
    console.log(initData)
});
