const fs = require("fs")

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

//still need to determine if I can use the fuzzy search so that user does not need to use specific source for file.
const copyFile = (location) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(location, "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

module.exports = { generateMarkdown, copyFile };
