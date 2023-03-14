let max = 5;
let isCorrect = false;

while (!isCorrect) {
  const randNumber = Math.floor(Math.random() * max) + 1;
  let guess = prompt(`Please enter a number between 1 - ${max}`);
  guess = Number(guess)

  if (isNaN(guess)) {
    console.log(`Please enter numbers only, and between 1 - ${max}`)
    continue;
  }
  else if (guess <= 0 || guess > max) {
    console.log(`Number is not within range. Please enter numbers between 1 - ${max}`)
    continue;
  }
  else {
    if (guess === randNumber) {
      console.log(`Correct. The number is indeed ${randNumber}`)
      isCorrect = true;
    }
    else if (guess < randNumber) {
      console.log(`Your guess is lower than the number. It's ${randNumber}, but you can try again.`)
    }
    else {
      console.log(`Your guess is higher than the number. It's ${randNumber}, but you can try again.`)
    }
  }
}
