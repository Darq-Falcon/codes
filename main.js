let choices = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("choose Rock, Paper, or Scissors").trim();
let computerSelection = choices[Math.floor(Math.random()*3)];

let playerMessage = `You selected ${playerSelection}:`;
let compMessage = `Computer selected ${computerSelection}`;
let result;


switch(playerSelection) {
    case "Rock":
        case "rock":
            if (computerSelection === "Scissors" ){ 
                result = "You win!";
            }
        else if (computerSelection === "Paper" ) {
            result = "Computer wins!";
        }
        else {
            result = "it's a tie";
        }
        break;
        
        case "Paper":
            case "paper":
            if (computerSelection === "Rock") {
                result = "You win!";
            }
        else if (computerSelection === "Paper") {
            result = "it's a tie!"
        }
        else {
            result = "Computer wins!"
        }
        break;

        case "Scissors":
        case "scissors":
            if (computerSelection === "Rock") {
            result = "Computer wins!";
        }
        else if (computerSelection === "Paper") {
            result = "You win!";
        }
        else {
            result = "It's a tie";
        }
    break;

    default: 
        result = "Invalid selection";
        break;
};

console.log(`${playerMessage} ${compMessage}. ${result}`);