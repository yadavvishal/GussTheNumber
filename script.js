// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let attempts = 0;
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

submitBtn.addEventListener("click", function() {
  const userGuess = parseInt(guessInput.value);

  // Validate the user's guess
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    // Compare the user's guess with the random number
    if (userGuess === randomNumber) {
      message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
      submitBtn.disabled = true;
    } else if (userGuess < randomNumber) {
      message.textContent = "Too low. Try again!";
    } else {
      message.textContent = "Too high. Try again!";
    }
  }

  guessInput.value = "";
});
