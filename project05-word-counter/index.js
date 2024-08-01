#!  /usr/bin/env node
"use strict";
// This line is called a shebang, it tells the OS to run it with node.js
Object.defineProperty(exports, "__esModule", { value: true });
//import the 'inquirer' module, which is a command line interface for node.js
var inquirer_1 = require("inquirer");
//declare a constant 'answer' and assign it to the result of inquirer.prompt function
var answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
var words = answers.Sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the  word count of the sentence to the console
console.log("Your sentence word count is ".concat(words.length));
