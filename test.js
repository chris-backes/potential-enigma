const inquirer = require("inquirer");
const license = require("license");

// const licenses = [
//   {
//     name: "None",
//     file: "None",
//     url: "None"
//   },
//   {
//     name: "Apache License 2.0",
//     file: "Apache-2.0",
//     url: "http://www.apache.org/licenses/LICENSE-2.0"
//   },
//   {
//     name: "GNU General Public License v3.0",
//     file: "GPL-3.0",
//     url: "https://www.gnu.org/licenses/gpl-3.0-standalone.html"
//   },
//   {
//     name: "MIT License",
//     file: "MIT",
//     url: "https://opensource.org/licenses/MIT"
//   },
//   {
//     name: "BSD 2-Clause 'simiplfied' License",
//     file: "BSD-2-Clause",
//     url: "https://opensource.org/licenses/BSD-2-Clause"
//   },
//   {
//     name: "BSD 3-Clause 'New' or 'Revised' License",
//     file: "BSD-3-Clause",
//     url: "https://opensource.org/licenses/BSD-3-Clause",
//   },
//   {
//     name: "Boost Software License 1.0",
//     file: "BSL-1.0",
//     url: "http://www.boost.org/LICENSE_1_0.txt"
//   },
//   {
//     name: "Creative Commons Zero v1.0 Universal",
//     file: "CC0-1.0",
//     url: "https://creativecommons.org/publicdomain/zero/1.0/legalcode"
//   },
//   {
//     name: "Elipse Public License 2.0",
//     file: "EPL-2.0",
//     url: "https://www.eclipse.org/legal/epl-2.0"
//   },
//   {
//     name: "GNU Affero General Public License v3.0",
//     file: "AGPL-3.0-only",
//     url: "https://www.gnu.org/licenses/agpl.txt"
//   },
//   {
//     name: "GNU General Public License v2.0",
//     file: "GPL-2.0",
//     url: "https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html"
//   },
//   {
//     name: "GNU Lesser General Public lIcense v2.1",
//     file: "LGPL-2.1",
//     url: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html"
//   },
//   {
//     name: "Mozilla Public License 2.0",
//     file: "MPL-2.0",
//     url: "http://www.mozilla.org/MPL/2.0/"
//   },
//   {
//     name: "The Unlicense",
//     file: "Unlicense",
//     url: "https://unlicense.org/"
//   },
// ];

// inquirer
//   .prompt(
//     {
//       type: "list",
//       name: "licenseChoice",
//       message:
//         "Which license would you like this project under (select 'none' if you would not like to include one)?",
//       choices: licenses.map((x) => x.name),
//     }
//   )
//   .then((responseData) => {
//     console.log(
//       licenses.find((element) => element.name === responseData.licenseChoice).url,
//       license.getLicense(
//         licenses.find((element) => element.name === responseData.licenseChoice)
//           .file,
//         { author: "Chris Backes", year: new Date().getFullYear() }
//       )
//     );
//   });

const generateTitle = (repo) => {
  let arr = repo.split("-")
  for (let i = 0; i < arr.length; i++) {
    //problem numero uno
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
  }
  return arr.join(" ")
}

inquirer
  .prompt(
    {
      type: "input",
      name: "repo",
      message:
        "The name of your repo will be used as the repo for you README and generate you license badge, if any. What is your repo name?",
      validate: (repoInput) => {
        return !!repoInput;
      },
    },
  )
.then((response) => {
  console.log(generateTitle(response.repo))
})
