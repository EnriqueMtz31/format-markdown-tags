const clear = require("clear");
const inquirer = require("./lib/inquirer");

clear();
console.log("hello world >n<");
setTimeout(() => {}, 3000);

inquirer.askQuestions();
