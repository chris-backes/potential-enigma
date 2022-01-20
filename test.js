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

inquirer
  .prompt(
    {
      type: "list",
      name: "licenseChoice",
      message:
        "Which license would you like this project under (select 'none' if you would not like to include one)?",
      choices: licenses.map((x) => x.name),
    }
    //In order we take the reponse we pass what into the get license function.
    //The first paramerter of that function is a function which finds object with the name property matching responseData.
    //We grab the fil property of that object. this  get's used as the first parameter of the getLicense function
    //to-do: pass in the user name (or name) of the user.
    //grab current year
    //execute function
  )
  .then((responseData) => {
    console.log(
      license.getLicense(
        licenses.find((element) => element.name === responseData.licenseChoice)
          .file,
        { author: "Chris Backes", year: new Date().getFullYear() }
      )
    );
  });
