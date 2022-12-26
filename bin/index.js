#! /usr/bin/env node

import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        Message: "Select your account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast cash", "withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "Amount",
        choices: [5000, 10000, 20000],
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Fast cash";
        },
    },
    {
        type: "number",
        name: "Amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 4000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Insuficient Balance");
    }
    else {
        const remaining = balance;
        console.log("your remaining balance is ", remaining);
    }
}
