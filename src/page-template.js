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
//take the repo name, split it up at the hyphen, capitalize first letter in each word, and return
const generateTitle = (repo) => {
  let arr = repo.split("-")
  for (let i = 0; i < arr.length; i++) {
    //problem numero uno
    repo[i] = repo[i].charAt(0).toUpperCase() + repo[i].substring(1)
  }
  return arr.join(" ")
}

// This badge will only work for github repos, but will match the choice selected for a license when the repo is created
const generateBadge = (licenseChoice, github, repo) => {
  return licenseChoice === "None"
    ? ""
    : `https://img.shields.io/github/license/${github}/${repo}`;
};

//The optional elements get style first as empty if empty, and then inject. declared as the result of ternary operators
const generateTOC = (confirmTOC, confirmMedia, mediaType, licenseChoice) => {
  let mediaTable = confirmMedia
    ? `* [${mediaType} of application](#${mediaType.toLowerCase()}-of-application)`
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
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)`;
  }
};
//needs work
const generateMedia = (confirmMedia, mediaType) => {
  if (!confirmMedia) {
    return "";
  } else {
    return `
    `;
  }
};

//uses the license node package, automatically inserts user name and year where needed
const generateLicense = (licenseChoice, github) => {
  if (licenseChoice === "None") {
    return "";
  } else {
    return `
## License

${license.getLicense(
  licenses.find((element) => element.name === licenseChoice)
    .file,
    { author: github, year: new Date().getFullYear() }
)}
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
    return `
        ## Contributing
        ${contributing}`;
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
${generateBadge(licenseChoice, github, repo)}

## Description
${description}

${generateTOC(confirmTOC, confirmMedia, mediaType, licenseChoice)}

## Installation
${installation}

## Usage
${usage}

${generateMedia(confirmMedia, mediaType)}
${generateLicense(licenseChoice)}
${generateContributing(contributing)}

## Tests
${tests}

## Questions
If you would like to reach out to me with any questions, you can find me here:
* Github: https://github.com/${github}
* Email: ${email}
`;
};
