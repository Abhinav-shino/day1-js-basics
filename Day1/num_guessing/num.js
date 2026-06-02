const readline = require('readline');
const secretNumber = 7;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function askQuestion() {
  rl.question('Guess a number between 1 and 10: ', (input) => {
    const guess = Number(input);
    if (guess === secretNumber) {
      console.log('Correct! You won!');
      rl.close(); // Stop the program
    } else if (guess > secretNumber) {
      console.log('Too high! Try again.');
      askQuestion(); 
    } else if (guess < secretNumber) {
      console.log('Too low! Try again.');
      askQuestion(); 
    } else {
      console.log('Invalid input. Please enter a number.');
      askQuestion(); 
    }
  });
}
askQuestion();
