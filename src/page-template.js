const license = require("license");
const licenses = [
  {
    name: "None",
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
//take the repo name, split it up at the hyphen, capitalize first letter in each word, and return
const generateTitle = (repo) => {
  let arr = repo.split("-")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
  }
  return arr.join(" ")
}

// This badge will only work for github repos, but will match the choice selected for a license when the repo is created
const generateBadge = (licenseChoice) => {
  let licenseName = licenses.find((element) => element.name === licenseChoice).file
  return licenseChoice === "None"
    ? ""
    : `![License](https://img.shields.io/badge/license-${licenseName
    .split(" ")
    .join("%20")}-green)`;
};

//The optional elements get style first as empty if empty, and then inject. declared as the result of ternary operators
const generateTOC = (confirmTOC, confirmMedia, mediaType, licenseChoice) => {
  let mediaKind = mediaType === "gif" ? "Gif" : mediaType === "webm" ? "Video" : "Image"
  let mediaTable = confirmMedia
    ? `* [${mediaKind} of application](#${mediaType.toLowerCase()}-of-application)`
    : "";
  let licenseTable = licenseChoice === "None" ? "" : "* [License](#license)";
  if (!confirmTOC) {
    return "";
  } else {
    return `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${mediaTable}
* [Credits](#credits)
${licenseTable}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`;
  }
};
//needs work
const generateMedia = (confirmMedia, mediaType) => {
  if (!confirmMedia) {
    return "";
  } else {
    let mediaKind = mediaType === "gif" ? "Gif" : mediaType === "webm" ? "Video" : "Image"
    return `## ${mediaKind} of Application
![Application ${mediaKind}](./application-media.${mediaType})
`;
  }
};

//uses the license node package, automatically inserts user name and year where needed
// returns both the url and the text of the license. Both are grabbed from the object sotring the information with a .find function
const generateLicense = (licenseChoice, github) => {
  if (licenseChoice === "None") {
    return "";
  } else {
    return `## License
${licenses.find((element) => element.name === licenseChoice).url}

${license.getLicense(licenses.find((element) => element.name === licenseChoice).file, { author: github, year: new Date().getFullYear() })}
`;
  }
};
//Inserts a link to COntributor Coveneta code of conduct if left unchanged
const generateContributing = (contributing) => {
  if (!contributing) {
    return "";
  } else if (contributing === "Contributor Covenant Code of Conduct") {
    return `
## Contributing
See the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
    `;
  } else {
    return `## Contributing
${contributing}
`;
  }
};

module.exports = (templateData) => {
  const {
    repo,
    description,
    confirmTOC,
    installation,
    confirmMedia,
    mediaType,
    usage,
    licenseChoice,
    contributing,
    tests,
    github,
    email,
  } = templateData;

  return `# ${generateTitle(repo)}
${generateBadge(licenseChoice)}

URL: https://github.com/${github}/${repo}

## Description
${description}

${generateTOC(confirmTOC, confirmMedia, mediaType, licenseChoice)}
## Installation
${installation}

## Usage
${usage}

${generateMedia(confirmMedia, mediaType)}
${generateLicense(licenseChoice, github)}
${generateContributing(contributing)}
## Tests
${tests}

## Questions
If you would like to reach out to me with any questions, you can find me here:
* Github: https://github.com/${github}
* Email: ${email}`;
};
