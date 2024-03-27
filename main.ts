import inquirer from 'inquirer';

let myBalance = 10000; // dollar
const myPin = 1234; // my pin code

let pinAnswer = await inquirer.prompt({
    name: 'Pin',
    message: 'Enter Your Pin Number',
    type: 'number'
});

if (pinAnswer.Pin === myPin) {
    console.log('Correct pin code!!!');

    let operationAns = await inquirer.prompt({
        name: 'operation',
        message: 'Please select an option',
        type: 'list',
        choices: ['withdraw', 'check balance', 'fast cash']
    });

    console.log(operationAns.operation);

    if (operationAns.operation === 'withdraw') {
        let amountAns = await inquirer.prompt([
            {
                name: 'amount',
                message: 'Enter your amount',
                type: 'number'
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log(`insufficient fund .your amount is ${myBalance}`);
        } else {
            myBalance -= amountAns.amount;
            console.log(`Withdrawal of ${amountAns.amount} successful. Your remaining balance is ${myBalance}`);
        }
    } else if (operationAns.operation === 'check balance') {
        console.log(`Your balance is: ${myBalance}`);
    } else if (operationAns.operation === 'fast cash') {
        let fastCashAmount = await inquirer.prompt([{
            name: 'amount',
            message: 'Select Fast Cash amount:',
            type: 'list',
            choices: [500, 2000, 5000, 10000]
        }]);

        if (fastCashAmount.amount > myBalance) {
            console.log(`Insufficient funds. Your current balance is ${myBalance}`);
        } else {
            myBalance -= fastCashAmount.amount;
            console.log(`Fast Cash withdrawal of ${fastCashAmount.amount} successful. Your remaining balance is ${myBalance}`);
        }
    }
} else {
    console.log('Invalid pin number');
}


