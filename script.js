let computerScore = 0;
let playerScore = 0;
let commentary = document.getElementById('commentary');
const scoreDisplay = document.getElementById('score');

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

paper.addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

rock.addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

scissors.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        commentary.textContent = "It's a draw!";
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            commentary.textContent = "Computer Won!";
            computerScore++;
        } else if (computerChoice == "rock") {
            commentary.textContent = "Player Won!";
            playerScore++;
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            commentary.textContent = "Computer Won!";
            computerScore++;
        } else if (computerChoice == "paper") {
            commentary.textContent = "Player Won!";
            playerScore++;
        }
    } else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            commentary.textContent = "Player Won!";
            playerScore++;
        } else if (computerChoice == "paper") {
            commentary.textContent = "Computer Won!";
            computerScore++;
        }
    }
    scoreDisplay.textContent = `${playerScore} - ${computerScore}`;
    winCheck();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "scissors";
    } else if (choice == 2) {
        return "paper";
    }
}

function winCheck() {
    if (playerScore == 5) {
        commentary.textContent = "Player won the Game!";
        disableClickListeners();
    } else if (computerScore == 5) {
        commentary.textContent = "Computer won the Game!";
        disableClickListeners();
    }
}

function disableClickListeners() {
    paper.removeEventListener('click', () => {});
    rock.removeEventListener('click', () => {});
    scissors.removeEventListener('click', () => {});
}
