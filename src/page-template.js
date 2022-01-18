const generateBadge = (license) => {
    return license === "None" ? "" : `https://img.shields.io/badge/license-${license.split(" ").join("%20")}-green`
}
const generateTOC = (confirmTOC, confirmMedia, mediaType, license) => {
  let mediaTable = confirmMedia
    ? `* [${mediaType} of application](#${mediaType.toLowerCase()}-of-application)`
    : "";
  let licenseTable = license === "None" ? "" : "* [License](#license)";
  if (!confirmTOC) {
    return "";
  } else {
    return `
        ## Table of Contents
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
const generateLicense = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `
    ## License`;
  }
};

const generateContributing = (contributing, email) => {
  if (!contributing) {
    return "";
  } else if (contributing === "Contributor Covenant Code of Conduct") {
    return `
    ## Contributing

    See the {Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)}
      `;
  } else {
    return `
        ## Contributing
        ${contributing}
        `;
  }
};

module.exports = (templateData) => {
  const {
    title,
    description,
    confirmTOC,
    installation,
    confirmMedia,
    mediaType,
    usage,
    license,
    contributing,
    tests,
    github,
    email,
  } = templateData;

  return `
    # ${title}
    ${generateBadge(license)}
    ## Description
    ${description}
    ${generateTOC(confirmTOC, confirmMedia, mediaType, license)}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ${generateMedia(confirmMedia, mediaType)}
    ${generateLicense(license)}
    ${generateContributing(contributing)}
    ## Tests
    ${tests}
    ## Questions
    If you would like to reach out to me with any questions, you can find me here:
    * Github: https://github.com/${github}
    * Email: ${email}
    `;
};
