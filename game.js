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


//Random computer answer
function getComputerSelection(){
    const options = [ "rock", "paper", "scissor"];
    let ComputerChoice = options[Math.floor(Math.random()*3)]
    

    return ComputerChoice;
}


//Decision maker of who will win
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
    gameRound +=1;
    


    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            compScore +=1;
            return console.log ("You lose! Paper beats Rock")
            
        } else if (computerSelection === "rock"){
            playerScore+=0;
            compScore +=0;
            return console.log ("It is a tie!")
            
        } else{
            playerScore +=1;
            return console.log("OK you won!")
            
        }
    }
  
    else if (playerSelection === "paper"){
        if (computerSelection === "scissor"){
            compScore +=1;
            return console.log ("You lose! Scissors beats Paper")
            
        } else if (computerSelection === "paper"){
            playerScore +=0;
            compScore +=0;
            return console.log ("It is a tie!")
        } else{
            playerScore +=1;
            return console.log("OK you won!")
            
        }
    }else if(playerSelection === "scissor" || playerSelection === "scissors"){
        if (computerSelection === "rock"){
            compScore +=1;
            return console.log ("You lose! Rock beats Scissors")
            
        } else if (computerSelection === "Scissors"){
            playerScore +=0;
            compScore +=0;
            return console.log ("It is a tie!")
            
            
        } else{
            playerScore +=1;
            return console.log("OK you won!")
            
        }

    } else 
        return console.log("Invalid Answer")
}


//Game Counter
function game(){

    for (i=1; gameRound < 5; i++){
        playRound(playerSelection,computerSelection);
        console.log("Round " + gameRound);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " +  compScore);
    }

    if (playerScore >  compScore){
        console.log("Congratulations You Won Against the Computer")
    } else if (playerScore < compScore){
        console.log("Oh No! You Lose! Computer is getting more intelligent than humans")
    } else 
        console.log("Close match, reload the page to get a change to beat the computer")

    return console.log( "Thank you for playing, reload the page if you want to play again!");
    
}



function gameStart(){

    let start1 =prompt ("Type Start to start the Game");
    let answer = start1.toLowerCase();
    if(answer != "start"){
        alert = ("Please type start to start the game ")
   } else
    return game();
}

gameStart();