/*
create a rock paper scissors game
arrays = rock, paper, scissors (this will be used for computer selection)
functions  for computer random selections
functions will be playerSelection, computerSelection
getComputerChoice(this will be the random answer of computer)
playRound(this will be the game decision who wins)
function game(this will be the round counter if the game already ends)
get input using prompt()
*/


/*onst playerScore;
const compScore;*/


/*computer random asnwer*/

/*Gets player input*/


function getPlayerSelection(){
    let playerChoice=window.prompt("What is your choice? Rock, Paper, or Scissors");
    
    return playerChoice.toLowerCase();
}

function getComputerSelection(){
    const options = [ "rock", "paper", "scissor"];
    let ComputerChoice = options[Math.floor(Math.random()*3)]
    

    return ComputerChoice;
}

let playerSelection = getPlayerSelection();
let computerSelection = getComputerSelection();



//Decision maker of who win
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            console.log ("You lose! Paper beats Rock")
        } else if (computerSelection === "rock"){
            console.log ("It is a tie!")
        } else{
            console.log("OK you won!")
        }

        return console.log();
    }
  
    else if (playerSelection === "paper"){
        if (computerSelection === "scissor"){
            console.log ("You lose! Scissors beats Paper")
        } else if (computerSelection === "paper"){
            console.log ("It is a tie!")
        } else{
            console.log("OK you won!")
        }
    }else if(playerSelection === "scissor" || playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log ("You lose! Rock beats Scissors")
        } else if (computerSelection === "Scissors"){
            console.log ("It is a tie!")
        } else{
            console.log("OK you won!")
        }

    } else 
         console.log("Invalid Answer")

  }

  console.log(playRound(playerSelection,computerSelection))