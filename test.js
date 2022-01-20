const inquirer = require("inquirer");
const license = require("license");

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

  inquirer.prompt(
    {
        type: "list",
        name: "license",
        message:
          "Which license would you like this project under (select 'none' if you would not like to include one)?",
        choices: licenses.map(x => x.name),
      }
  ).then((responseData) => {
      console.log(license.getLicense(licenses.find(element => {
          return element.name === responseData.license
      }).file, { author: "Chris Backes", year: new Date().getFullYear()}))
  })
