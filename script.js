function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    (computerChoice >= 1 && computerChoice <= 3) ? computerChoice = "rock" :
    (computerChoice >= 4 && computerChoice <= 6) ? computerChoice = "paper" :
    computerChoice = "scissors";
    return computerChoice;
}

let tieCount = 0;
let userScore = 0;
let computerScore = 0;

let game = (player, computer) => {
    if(player == computer) {
        console.log("It's a tie!");
    } else if(player == 'rock') {
        if(computer == 'paper'){
            console.log("You lose! Paper beats rock.");
        } else if(computer == 'scissors') {
            console.log("You won! Rock beats scissors.");
        }
    } else if(player == 'paper') {
        if(computer == 'rock') {
            console.log("You won! Paper beats rock.");
        } else if (computer == "scissors") {
            console.log("You lose! Scissors beats paper.");
        }
    } else if (player == 'scissors') {
        if(computer == 'rock') {
            console.log("You lose! Rock beats Scissors");
        } else if (computer == "paper") {
            console.log("You won! Scissors beats paper.")
        }
    } 
}

function playGame() {
    for(let i = 0; i < 5; i++){
        const playerWeapon = prompt('Choose your weapon', 'Rock, Paper or Scissors').toLowerCase();
        const computerWeapon = getComputerChoice();
        game(playerWeapon, computerWeapon);
    }
}

playGame();

