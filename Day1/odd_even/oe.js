const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (number) {
    let n = Number(number);

    if (isNaN(n)) {
        console.log("That's not a valid number.");
    } else if (n % 2 === 0) {
        console.log(`${n} is Even.`);
    } else {
        console.log(`${n} is Odd.`);
    }

    rl.close();
});
