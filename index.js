#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, // base currency
    EUR: 0.94,
    GBP: 0.80,
    PKR: 278.07,
    INR: 83.45,
    SAR: 3.75,
    AED: 3.67,
    CNY: 7.24
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR", "INR", "SAR", "AED", "CNY"]
    },
    {
        name: "to",
        message: "Enter to Currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR", "INR", "SAR", "AED", "CNY"]
    },
    {
        name: "amount",
        message: "Enter Amount: ",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from]; // it will give an error - assign type any to currenct above
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // to covert the amount given by user to base currency - 
let convertedAmount = baseAmount * toAmount; // to convert the base currency to the currency given by user
console.log(`You currently have ${user_answer.to} ${convertedAmount.toFixed(2)} in hand`); //max to 2 decimals
//  console.log(fromAmount);
//  console.log(toAmount);
//  console.log(amount);
