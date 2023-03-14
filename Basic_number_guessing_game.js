// Set the maximum number to guess
let max = 5;
// Initialize a flag to track if the guess is correct
let isCorrect = false;

// Start the game loop
while (!isCorrect) {
  // Generate a random number between 1 and max
  const randNumber = Math.floor(Math.random() * max) + 1;
  // Prompt the user to guess a number
  let guess = prompt(`Please enter a number between 1 - ${max}`);
  // Convert the user's input to a number
  guess = Number(guess)

  // Check if the user's input is not a number
  if (isNaN(guess)) {
    console.log(`Please enter numbers only, and between 1 - ${max}`)
    // Skip the rest of the loop and go back to prompting the user
    continue;
  }
  // Check if the user's input is outside the valid range
  else if (guess <= 0 || guess > max) {
    console.log(`Number is not within range. Please enter numbers between 1 - ${max}`)
    // Skip the rest of the loop and go back to prompting the user
    continue;
  }
  else {
    // Check if the user's guess is correct
    if (guess === randNumber) {
      console.log(`Correct. The number is indeed ${randNumber}`)
      // Set the flag to true to end the game loop
      isCorrect = true;
    }
    // Check if the user's guess is too low
    else if (guess < randNumber) {
      console.log(`Your guess is lower than the number. It's ${randNumber}, but you can try again.`)
    }
    // The user's guess is too high
    else {
      console.log(`Your guess is higher than the number. It's ${randNumber}, but you can try again.`)
    }
  }
}
