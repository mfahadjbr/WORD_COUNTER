#! usr/bin/env node
import inquirer from "inquirer";
const word=await inquirer.prompt([
    {
        type:'input',
        name:'counter',
        message:'Enter a any statement ='
    }
])
let word1=word.counter.trim().split(" ");
console.log(word1);
console.log(word1.length);