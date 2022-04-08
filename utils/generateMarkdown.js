// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "Boost":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;

    case "BSD 3-clause":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "Eclipse":
      link = "https://opensource.org/licenses/EPL-1.0";
      break;

    case "GNU GPL v3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "IBM":
      link = "https://opensource.org/licenses/IPL-1.0";
      break;

    case "ISC":
      link = "https://opensource.org/licenses/ISC";
      break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "Mozilla":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;

    case "SIL":
      link = "https://opensource.org/licenses/OFL-1.1";
      break;

    case "WTFPL":
      link = "http://www.wtfpl.net/about/";
      break;

    case "Zlib":
      link = "https://opensource.org/licenses/Zlib";
      break;

    case "none":
      link = "";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  const section = `This project is using the license ${license}. See ${link} for more information.`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, please run the following command:
  \' \' \'
  ${data.installation}
  \' \' \'
  # Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To test, please run the following command;
  \' \' \'
  ## Questions
  For any questions about the project, please contact me by either of the following links:
  * Email = ${data.email}
  or visit my GitHub profile:
  * GitHub - ${
    "[" + data.github + "]" + "(https://github.com/" + data.github + ")"
  }
`;
}

module.exports = generateMarkdown;