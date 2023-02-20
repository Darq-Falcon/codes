// Define an array of possible choices for the game
let choices = ["rock", "paper", "scissors"];

// Prompt the player to select a choice, convert to lowercase and remove whitespace
let playerSelection = prompt("choose Rock, Paper, or Scissors").trim().toLowerCase();

// Generate a random choice for the computer from the array of choices
let computerSelection = choices[Math.floor(Math.random()*3)];

// Create messages to display the player and computer's selections
let playerMessage = `You selected ${playerSelection}:`;
let compMessage = `Computer selected ${computerSelection}`;

// Determine the outcome of the game based on the player and computer's choices
let result;
switch(playerSelection) {
    case "rock":
        // If the computer chose scissors, the player wins
        if (computerSelection === "scissors" ){ 
                result = "You win!";
            }
        // If the computer chose paper, the computer wins
        else if (computerSelection === "paper" ) {
            result = "Computer wins!";
        }
        // If the computer chose rock, it's a tie
        else {
            result = "it's a tie";
        }
        break;
        
    case "paper":
        // If the computer chose rock, the player wins
        if (computerSelection === "rock") {
            result = "You win!";
        }
        // If the computer chose paper, it's a tie
        else if (computerSelection === "paper") {
            result = "it's a tie!"
        }
        // If the computer chose scissors, the computer wins
        else {
            result = "Computer wins!"
        }
        break;

    case "scissors":
        // If the computer chose paper, the player wins
        if (computerSelection === "paper") {
            result = "You win!";
        }
        // If the computer chose rock, the computer wins
        else if (computerSelection === "rock") {
            result = "Computer wins!";
        }
        // If the computer chose scissors, it's a tie
        else {
            result = "It's a tie";
        }
        break;

    default: 
        // If the player entered an invalid choice, set the result to an error message
        result = "Invalid selection";
        break;
};

// Display the player and computer's selections and the result of the game
console.log(`${playerMessage} ${compMessage}. ${result}`);
