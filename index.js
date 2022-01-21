// TODO: Include packages needed for this application
const inquirer = require("inquirer");
inquirer.registerPrompt("fuzzypath", require("inquirer-fuzzy-path"));
const fs = require("fs");
const { resourceUsage } = require("process"); //How did this get in here?
const { generateMarkdown, copyFile } = require("./utils/generateMarkdown");
const pageTemplate = require("./src/page-template");

const licenses = [
  {
    name: "None",
    file: "None",
  },
  {
    name: "Apache License 2.0",
    file: "Apache-2.0",
  },
  {
    name: "GNU General Public License v3.0",
    file: "GPL-3.0",
  },
  {
    name: "MIT License",
    file: "MIT",
  },
  {
    name: "BSD 2-Clause 'simiplfied' License",
    file: "BSD-2-Clause",
  },
  {
    name: "BSD 3-Clause 'New' or 'Revised' License",
    file: "BSD-3-Clause",
  },
  {
    name: "Boost Software License 1.0",
    file: "BSL-1.0",
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    file: "CC0-1.0",
  },
  {
    name: "Elipse Public License 2.0",
    file: "EPL-2.0",
  },
  {
    name: "GNU Affero General Public License v3.0",
    file: "AGPO-3.0-only",
  },
  {
    name: "GNU General Public License v2.0",
    file: "GPL-2.0",
  },
  {
    name: "GNU Lesser General Public lIcense v2.1",
    file: "LGPL-2.1-only",
  },
  {
    name: "Mozilla Public License 2.0",
    file: "MPL-2.0",
  },
  {
    name: "The Unlicense",
    file: "Unlicense",
  },
];
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "repo",
    message:
      "The name of your repo will be used as the repo for you README and generate you license badge, if any. What is your repo name?",
    validate: (repoInput) => {
      return !!repoInput;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe what you application does.",
    validate: (descriptionInput) => {
      return !!descriptionInput;
    },
  },
  {
    type: "confirm",
    name: "confirmTOC",
    message: "Would you like to include a table of Contents?",
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    validate: (installInput) => {
      return !!installInput;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use the application.",
    validate: (installInput) => {
      return !!installInput;
    },
  },
  {
    type: "confirm",
    name: "confirmMedia",
    message: "Would you like to include a screenshot or video in your README?",
    default: true,
  },
  {
    type: "list",
    name: "mediaType",
    message: "What kind of media is it?",
    choices: ["Gif", "Video", "Image"],
    when: ({ confirmMedia }) => {
      return !!confirmMedia;
    },
  },
  {
    type: "fuzzypath",
    name: "path",
    excludePath: (nodePath) => nodePath.startsWith("node_modules"),
    excludePath: (nodePath) => nodePath == ".",
    itemType: "any",
    rootPath: "projects",
    message:
      "Type the name of your file. Possible directory matches will be listed",
    default: "./projects",
    suggestOnly: false,
    depthLimit: 5,
    when: ({ confirmMedia }) => {
      return !!confirmMedia;
    },
  },
  {
    type: "list",
    name: "licenseChoice",
    message:
      "Which license would you like this project under (select 'none' if you would not like to include one)?",
    choices: licenses.map((x) => x.name),
  },
  {
    type: "input",
    name: "contibuting",
    message:
      "Please provide your own guidelines for contributing to this (or leave blank if you would like none). The default, 'Contributor Covenant Code of Conduct', will insert a link to that covenant (see here: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt). Any headings should begin with three Number Signs and a space after them (sub headings should add a Number sign).",
    default: "Contributor Covenant Code of Conduct",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please provide any tests the users can run on the application (Do not leave blank). Multiple tests should be separated by an underscore.",
    default: "At this point, there are no tests for the application",
    validate: (testsInput) => !!testsInput,
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username",
    validate: (githubInput) => !!githubInput,
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
    validate: (emailInput) => !!emailInput,
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "README created.",
      });
    });
  });
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init()
  .then((initData) => {
    return pageTemplate(initData);
  })
  .then((readmeText) => {
    return writeToFile(readmeText);
  })
  .then((writeToFileResponse) => {
    console.log(writeToFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
