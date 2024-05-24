function getComputerChoice() {
    const computerWeaponKit = ["paper", "rock", "scissors"];
    const computerWeapon = computerWeaponKit[Math.round(Math.random() * 2)];
    return computerWeapon;
}

const buttonsContainer = document.querySelector(".buttons-container");

buttonsContainer.addEventListener("click", (e) => {
    let playerWeapon;
    switch (e.target.id) {
        case "paper-button":
            playerWeapon = "paper";
            break;
        case "rock-button":
            playerWeapon = "rock";
            break;
        case "scissors-button":
            playerWeapon = "scissors";
            break;
    }

    playRound(playerWeapon, getComputerChoice());
})


let tieCount = 0;
let userScore = 0;
let computerScore = 0;
const resultsPara = document.querySelector("#results-para");

let playRound = (player, computer) => {
    resultsPara.textContent = '';
    if (player == computer) {
        resultsPara.textContent = "It's a tie!";
        tieCount++;
    } else if (player == 'rock') {
        if (computer == 'paper') {
            resultsPara.style.color = "red";
            resultsPara.textContent = "You lose! Paper beats rock.";
            computerScore++;
        } else if (computer == 'scissors') {
            resultsPara.style.color = "lightgreen";
            resultsPara.textContent = "You won! Rock beats scissors.";
            userScore++
        }
    } else if (player == 'paper') {
        if (computer == 'rock') {
            resultsPara.style.color = "lightgreen";
            resultsPara.textContent = "You won! Paper beats rock.";
            userScore++;
        } else if (computer == "scissors") {
            resultsPara.style.color = "red";
            resultsPara.textContent = "You lose! Scissors beats paper.";
            computerScore++;
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            resultsPara.style.color = "red";
            resultsPara.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        } else if (computer == "paper") {
            resultsPara.style.color = "lightgreen";
            resultsPara.textContent = "You won! Scissors beats paper.";
            userScore++;
        }
    }

    console.log(tieCount, userScore, computerScore);
}

