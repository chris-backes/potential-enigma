const fs = require("fs")

//All three of three of these requirements are fulfilled in the page-template.js file. The first in generateBadge and the latter two under a single function: generateLicense
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//if that this was asking for wasn't the fs.writeFile, and was asking for was generating texto n a template, then it is in the page-template file, under the src folder, where it is supposed to be
function generateMarkdown(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "README Created.",
      });
    });
  });
};

module.exports = { generateMarkdown };
