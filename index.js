// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const { resourceUsage } = require("process"); //How did this get in here?
const { generateMarkdown } = require("./utils/generateMarkdown");
const pageTemplate = require("./src/page-template");

const licenses = [
  {
    name: "None",
    file: "None",
    url: "None"
  },
  {
    name: "Select Later",
    file: "None",
    url: "None"
  },
  {
    name: "Apache License 2.0",
    file: "Apache-2.0",
    url: "http://www.apache.org/licenses/LICENSE-2.0"
  },
  {
    name: "GNU General Public License v3.0",
    file: "GPL-3.0",
    url: "https://www.gnu.org/licenses/gpl-3.0-standalone.html"
  },
  {
    name: "MIT License",
    file: "MIT",
    url: "https://opensource.org/licenses/MIT"
  },
  {
    name: "BSD 2-Clause 'simiplfied' License",
    file: "BSD-2-Clause",
    url: "https://opensource.org/licenses/BSD-2-Clause"
  },
  {
    name: "BSD 3-Clause 'New' or 'Revised' License",
    file: "BSD-3-Clause",
    url: "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    name: "Boost Software License 1.0",
    file: "BSL-1.0",
    url: "http://www.boost.org/LICENSE_1_0.txt"
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    file: "CC0-1.0",
    url: "https://creativecommons.org/publicdomain/zero/1.0/legalcode"
  },
  {
    name: "Elipse Public License 2.0",
    file: "EPL-2.0",
    url: "https://www.eclipse.org/legal/epl-2.0"
  },
  {
    name: "GNU Affero General Public License v3.0",
    file: "AGPL-3.0-only",
    url: "https://www.gnu.org/licenses/agpl.txt"
  },
  {
    name: "GNU General Public License v2.0",
    file: "GPL-2.0",
    url: "https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html"
  },
  {
    name: "GNU Lesser General Public lIcense v2.1",
    file: "LGPL-2.1",
    url: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html"
  },
  {
    name: "Mozilla Public License 2.0",
    file: "MPL-2.0",
    url: "http://www.mozilla.org/MPL/2.0/"
  },
  {
    name: "The Unlicense",
    file: "Unlicense",
    url: "https://unlicense.org/"
  },
];
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "repo",
    message:
      "The name of your repo will be used as the title for your README. What is your repo name?",
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
    message: "Would you like to include a screenshot or video in your README (accepted file types currently are gif, webm, png, jpg)? If you select yes, the file name must be 'application-media' and in the same folder as the README. You may change this later if you wish.",
    default: true,
  },
  {
    type: "list",
    name: "mediaType",
    message: "What kind of media is it?",
    choices: ["gif", "png", "jpg"],
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
    name: "contributing",
    message:
      "Please provide your own guidelines for contributing to this (or leave blank if you would like none). The default, 'Contributor Covenant Code of Conduct', will insert a link to that covenant (see here: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt). Any headings should begin with three Number Signs and a space after them (sub headings should add a Number sign).",
    default: "Contributor Covenant Code of Conduct",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please provide any tests the users can run on the application (Do not leave blank).",
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
//this is done on the generateMarkdown, if what this is asking for is the fs.writeFile
function writeToFile(data) {
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
    return generateMarkdown(readmeText);
  })
  .then((writeToFileResponse) => {
    console.log(writeToFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
