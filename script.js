function getComputerChoice() {
    /*let computerChoice = Math.floor(Math.random() * 9) + 1;
    (computerChoice >= 1 && computerChoice <= 3) ? computerChoice = "rock" :
    (computerChoice >= 4 && computerChoice <= 6) ? computerChoice = "paper" :
    computerChoice = "scissors";
    return computerChoice;*/
    let computerChoice = "rock";
    return computerChoice;
}

let tieCount = 0;
let userScore = 0;
let computerScore = 0;

let game = (player, computer) => {
    if(player == computer) {
        document.body.appendChild("<p>It's a tie!<p>");
        tieCount++;
    } else if(player == 'rock') {
        if(computer == 'paper'){
            document.body.appendChild("<p>You lose! Paper beats rock.<p>");
            computerScore++;
        } else if(computer == 'scissors') {
            console.log("You won! Rock beats scissors.");
            userScore++
        }
    } else if(player == 'paper') {
        if(computer == 'rock') {
            console.log("You won! Paper beats rock.");
            userScore++;
        } else if (computer == "scissors") {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    } else if (player == 'scissors') {
        if(computer == 'rock') {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computer == "paper") {
            console.log("You won! Scissors beats paper.")
            userScore++;
        }
    } 
}

function playGame() {
    for(let i = 0; i < 5; i++){
        const playerWeapon = prompt('Choose your weapon', 'Rock, Paper or Scissors').toLowerCase();
        const computerWeapon = getComputerChoice();
        game(playerWeapon, computerWeapon);
    }
    console.log("The score is: User " + userScore + " Computer: " + computerScore + " Ties: " + tieCount);
    if(userScore > computerScore) {
        console.log("%cYou are the fucking master of this game!", "background-color: green");
    } else if(computerScore > userScore) {
        console.log("%cYou suck! HAHAHAHAHAH", "background-color: red");
    } else {
        console.log("%cBoth of you suck!", "background-color: blue");
    }
}


playGame();

