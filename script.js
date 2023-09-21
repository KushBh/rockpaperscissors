function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "rock";
    }else if(choice == 1){
        return "scissors";
    }else if(choice == 2){
        return "paper";
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        console.log("Tie round");
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'rock'){
            console.log('Player won, paper beats rock');
            playerScore = playerScore + 1;
        }else if(computerChoice == 'scissors'){
            console.log('Computer won, scissors beats paper');
            computerScore = computerScore + 1;
        }
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            console.log('Computer won, paper beats rock');
            computerScore = computerScore + 1;
        }else if(computerChoice == 'scissors'){
            console.log('Player won, rock beats scissors');
            playerScore = playerScore + 1;
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            console.log('Computer won, rock beats scissors');
            computerScore = computerScore + 1;
        }else if(computerChoice == 'paper'){
            console.log('Player won, scissors beats paper');
            playerScore = playerScore + 1;
        }
    }
}
let playerScore = 0;
let computerScore = 0;
const computerChoice = getComputerChoice();
game();

function game(){
    while(playerScore < 5 && computerScore < 5){
        let playerChoice = prompt("What do you choose?").toLowerCase;
        playRound(playerChoice, computerChoice);
    }
    if(playerScore == 5){
        console.log('Player won the game!');
    }else{
        console.log('Computer won the game!');
    }
}