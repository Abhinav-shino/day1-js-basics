let randomNumber;
let attempts;
let maxAttempts = 10;
let gameOver;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const startBtn = document.getElementById("startBtn");
const statusEl = document.getElementById("status");
const attemptsEl = document.getElementById("attempts");
const historyEl = document.getElementById("history");

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    gameOver = false;

    guessInput.disabled = false;
    submitBtn.disabled = false;
    startBtn.style.display = "none";
    statusEl.textContent = "Enter your first guess!";
    statusEl.className = "status";
    attemptsEl.textContent = `Attempts: 0 / ${maxAttempts}`;
    historyEl.innerHTML = "";
    guessInput.value = "";
    guessInput.focus();
}

function submitGuess() {
    if (gameOver) return;

    let guess = Number(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        statusEl.textContent = "Enter a valid number (1-10)";
        statusEl.className = "status";
        return;
    }

    attempts++;
    attemptsEl.textContent = `Attempts: ${attempts} / ${maxAttempts}`;

    let result = "";
    if (guess === randomNumber) {
        result = "✓";
        statusEl.textContent = `You got it in ${attempts} attempt(s)!`;
        statusEl.className = "status win";
        endGame();
    } else if (guess < randomNumber) {
        result = "↑ Too low";
        statusEl.textContent = "Too low! Try higher.";
        statusEl.className = "status hint";
    } else {
        result = "↓ Too high";
        statusEl.textContent = "Too high! Try lower.";
        statusEl.className = "status hint";
    }

    historyEl.innerHTML = `<div><strong>${guess}</strong> — ${result}</div>` + historyEl.innerHTML;

    guessInput.value = "";
    guessInput.focus();

    if (attempts >= maxAttempts && guess !== randomNumber) {
        statusEl.textContent = `Game Over! The number was ${randomNumber}.`;
        statusEl.className = "status lose";
        endGame();
    }
}

function endGame() {
    gameOver = true;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    startBtn.style.display = "inline-block";
    startBtn.textContent = "Play Again";
}

guessInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !guessInput.disabled) {
        submitGuess();
    }
});
