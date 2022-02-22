// Stuff using inquirer
const inquirer = require("inquirer");

module.exports = {
  askQuestions: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message: "Enter something:",
      },
      {
        name: "password",
        type: "password",
        message: "Enter a password:",
      },
    ];

    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log({ ...answers });
      })
      .catch((error) => {
        console.log({ error });
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          // Something else went wrong
          console.log("Something else went wrong");
        }
      });
  },
};
