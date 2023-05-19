// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    "None": "",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blueviolet.svg)]",
    "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]",
    "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    "The Hippocratic License 2.1": "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]",
    "IBM Public License Version 1.0": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]",
    "ISC": "[![License](https://img.shields.io/badge/License-ISC-blueviolet.svg)]",
    "MIT": "[![License](https://img.shields.io/badge/License-MIT-blueviolet.svg)]",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]",
    "The Perl License": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]",
    "SIL Open Font License 1.1": "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
    "Zlib": "[![License](https://img.shields.io/badge/License-Zlib-blueviolet.svg)]"
  };
  return licenses[license] || "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "None": "",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "Boost Software License 1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "BSD 3-Clause License": "https://opensource.org/licenses/BSD-3-Clause",
    "Eclipse Public License 1.0": "https://www.eclipse.org/legal/epl-1.0/",
    "GNU GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
    "The Hippocratic License 2.1": "https://firstdonoharm.dev/version/2/1/license.html",
    "IBM Public License Version 1.0": "https://opensource.org/licenses/IPL-1.0",
    "ISC": "https://opensource.org/licenses/ISC",
    "MIT": "https://opensource.org/licenses/MIT",
    "Mozilla Public License 2.0": "https://www.mozilla.org/en-US/MPL/2.0/",
    "The Perl License": "https://dev.perl.org/licenses/",
    "SIL Open Font License 1.1": "https://scripts.sil.org/OFL",
    "The Unlicense": "http://unlicense.org/",
    "Zlib": "https://opensource.org/licenses/Zlib"
  };
  return licenseLinks[license] || "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseTexts = {
    "None": "",
    "Apache 2.0": `Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).`,
    "Boost Software License 1.0": `Licensed under the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt).`,
    "BSD 3-Clause License": `Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`,
    "Eclipse Public License 1.0": `Licensed under the [Eclipse Public License 1.0](https://www.eclipse.org/legal/epl-1.0/).`,
    "GNU GPL v3": `Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).`,
    "The Hippocratic License 2.1": `Licensed under the [Hippocratic License 2.1](https://firstdonoharm.dev/version/2/1/license.html).`,
    "IBM Public License Version 1.0": `Licensed under the [IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0).`,
    "ISC": `Licensed under the [ISC License](https://opensource.org/licenses/ISC).`,
    "MIT": `Licensed under the [MIT License](https://opensource.org/licenses/MIT).`,
    "Mozilla Public License 2.0": `Licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).`,
    "The Perl License": `Licensed under the [Perl License](https://dev.perl.org/licenses/).`,
    "SIL Open Font License 1.1": `Licensed under the [SIL Open Font License 1.1](https://scripts.sil.org/OFL).`,
    "The Unlicense": `This project is released under [The Unlicense](http://unlicense.org/).`,
    "Zlib": `Licensed under the [Zlib License](https://opensource.org/licenses/Zlib).`
  };
  return licenseTexts[license] || "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseBadge(data.license)}${renderLicenseLink}

## Table of Contents
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contact
Please email all questions to:
- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}
module.exports = generateMarkdown;
