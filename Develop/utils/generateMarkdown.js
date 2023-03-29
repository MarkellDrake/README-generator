// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  `[![License](https://img.shields.io/badge/${license}-blue.svg)]`
  return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
`(https://opensource.org/licenses/${license})`

return
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge}
  ${renderLicenseLink}
  ${renderLicenseSection}

`;
}

module.exports = generateMarkdown;
