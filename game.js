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


function playRound(playerSelection, computerSelection) {
    /**ROCK */
    
    /**PAPER */

    /**SCISSORS */

  }

