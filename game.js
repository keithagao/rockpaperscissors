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

let gameRound = 0;
let playerScore =0;
let compScore = 0;
let playerSelection ="";
let computerSelection =getComputerSelection();

//Gets player input
/*function getPlayerSelection(){
    let playerChoice=window.prompt("What is your choice? Rock, Paper, or Scissors");
    
    return playerChoice.toLowerCase();
}*/

//Random computer answer
function getComputerSelection(){
    const options = [ "rock", "paper", "scissor"];
    let ComputerChoice = options[Math.floor(Math.random()*3)]
    

    return ComputerChoice;
}


//Decision maker of who win
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
    gameRound +=1;


    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            console.log ("You lose! Paper beats Rock")
            compScore +=1;
        } else if (computerSelection === "rock"){
            console.log ("It is a tie!")
            playerScore +=0;
            compScore +=0;
        } else{
            console.log("OK you won!")
            playerScore +=1;
        }
    }
  
    else if (playerSelection === "paper"){
        if (computerSelection === "scissor"){
            console.log ("You lose! Scissors beats Paper")
            compScore +=1;
        } else if (computerSelection === "paper"){
            console.log ("It is a tie!")
            playerScore +=0;
            compScore +=0;
        } else{
            console.log("OK you won!")
            playerScore +=1;
        }
    }else if(playerSelection === "scissor" || playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log ("You lose! Rock beats Scissors")
            compScore +=1;
        } else if (computerSelection === "Scissors"){
            console.log ("It is a tie!")
            playerScore +=0;
            compScore +=0;
        } else{
            console.log("OK you won!")
            playerScore +=1;
        }

    } else 
        console.log("Invalid Answer")
    

}


//Game Counter
function game(){

    for (i=1; gameRound < 5; i++){
        playRound(playerSelection,computerSelection);
        console.log("Round " + gameRound);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " +  compScore);
    }

    return console.log( "Thank you for playing");
    
}

game();