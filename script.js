function getComputerChoice(playerChoice){
    let choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "rock";
    }else if(choice == 1){
        return "scissors";
    }else if(choice == 2){
        return "paper";
    }
    round(choice, playerChoice);
}
let computerScore = 0;
let playerScore = 0;
let commentary = document.getElementById('commentary').textContent;
/*const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
paper.addEventListener('click', () => {
    commentary = 'You chose paper'
    setTimeout(1500, getComputerChoice('paper'))
});
rock.addEventListener('click', () => {
    commentary = 'You chose rock'
    setTimeout(1500, getComputerChoice('rock'))
});
scissors.addEventListener('click', () => {
    commentary = 'You chose scissors'
    setTimeout(1500, getComputerChoice('scissors'))
});*/

function round(computerChoice, playerChoice){
    if(computerChoice == playerChoice){
        commentary = 'Its a tie!'
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'rock'){
<<<<<<< HEAD
            commentary = 'Player Won!';
        }else{
            commentary = 'Computer Won!';
        }
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'scissors'){
            commentary = 'Player Won!';
        }else{
            commentary = 'Computer Won!';
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'paper'){
            commentary = 'Player Won!';
        }else{
            commentary = 'Computer Won!';
        }
    }
}
=======
            console.log('Player won, paper beats rock');
            playerScore++;
        }else if(computerChoice == 'scissors'){
            console.log('Computer won, scissors beats paper');
            computerScore++;
        }
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            console.log('Computer won, paper beats rock');
            computerScore++;
        }else if(computerChoice == 'scissors'){
            console.log('Player won, rock beats scissors');
            playerScore++;
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            console.log('Computer won, rock beats scissors');
            computerScore++;
        }else if(computerChoice == 'paper'){
            console.log('Player won, scissors beats paper');
            playerScore++;
        }
    }
}
let playerScore = 0;
let computerScore = 0;
game();

function game(){
    while(playerScore < 5 && computerScore < 5){
        let playerChoice = prompt("What do you choose?");
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    if(playerScore == 5){
        console.log('Player won the game!');
    }else{
        console.log('Computer won the game!');
    }
}
>>>>>>> 0b53b1dcdc7f8ab917caf357a564032dbe522eca
