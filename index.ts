#! /usr/bin/env node

import inquirer  from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep =() => {
    return new Promise((res)=>{
        setTimeout(res, 3000);
    })
}



async function welcome() {
   let rainbowTitle = chalkAnimation.rainbow("\n    <<< Developed by Suleman Ali >>> ");
   await sleep();
   rainbowTitle.stop();
    console.log(chalk.cyanBright(`\n Let's Start Your Calculation.`))
   console.log(chalk.redBright(`    _____________________
   |  _________________  |
   | | TS          0.0 | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`))
}
await welcome();

async function askQuestions(){
  const answers = await  inquirer
 .prompt([
        {
            type : "list" ,
            name : "operator" ,
            message : "Which Operation You Want To Perform? \n" ,
            choices : ["Addition","Subtraction","Multiplication","Division"],
        },
        {
            type : "number",
            name : "num1",
            message : "Enter number 1 : "
        },
        {
            type : "number",
            name : "num2",
            message : "Enter number 2 : "
        }
    ]);
    if
    (answers.operator == "Addition"){
        console.log(chalk.gray(`${answers.num1} + ${answers.num2} =  ${answers.num1 + answers.num2}`));
    }
    else if
    (answers.operator == "Subtraction"){
        console.log(chalk.green(`${answers.num1} - ${answers.num2} =  ${answers.num1 - answers.num2}`));
    }
    else if
    (answers.operator == "Multiplication"){
        console.log(`${answers.num1} * ${answers.num2} =  ${answers.num1 * answers.num2}`);
    }
    else if
    (answers.operator == "Division"){
        console.log(`${answers.num1} / ${answers.num2} =  ${answers.num1 / answers.num2}`);
    }
};
// askQuestions();

async function StartAgain() {
    do{
       await askQuestions(); 
      var again = await  inquirer
    .prompt({
        type: "input",
        name: "restart",
        message: "Do you want to continue ? Press (y/n):"
    })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == "yes" || again.restart == 'Yes' || again.restart == 'YES')
    console.log("\n Thank You For Using Calculator.")
}
StartAgain();




