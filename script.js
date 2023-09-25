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
