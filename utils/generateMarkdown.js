// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 📝
  ${data.description}

  ## Table of Contents 🗒
  - [Installation](#installation-💻)
  - [Usage](#usage-🏆)
  - [Contribution](#contribution-😃)
  - [Test](#test-🧪)
  - [License](#license-📜)
  - [Questions](#questions-🙋)

  ## Installation 💻

  ${data.installation}
  ## Usage 🏆
  ${data.usage}

  ## Contribution 😃
  ${data.contribution}

  ## Test 🧪
  ${data.test}

  ## License 📜
  This project is licensed under the ${data.license} license.

  ## Questions 🙋
  If you have any questions, please reach out to me at: ${data.email}
  GitHub: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
