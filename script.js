function getComputerChoice() {
    const computerWeaponKit = ["paper", "rock", "scissors"];
    const computerWeapon = computerWeaponKit[Math.round(Math.random() * 2)];
    return computerWeapon;
}

const buttonsContainer = document.querySelector(".buttons-container");
const replayButton = document.createElement("button");

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
const scoreboard = document.querySelector("#scoreboard");
const results = document.querySelector(".results");


let playRound = (player, computer) => {
    resultsPara.textContent = '';
    if (player == computer) {
        resultsPara.textContent = "It's a tie!";
        tieCount++;
    } else if (player == 'rock') {
        if (computer == 'paper') {
            resultsPara.style.color = "#fd5c63";
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
            resultsPara.style.color = "#fd5c63";
            resultsPara.textContent = "You lose! Scissors beats paper.";
            computerScore++;
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            resultsPara.style.color = "#fd5c63";
            resultsPara.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        } else if (computer == "paper") {
            resultsPara.style.color = "lightgreen";
            resultsPara.textContent = "You won! Scissors beats paper.";
            userScore++;
        }
    }
    if (userScore === 5 || computerScore === 5) {
        results.removeChild(scoreboard);
        document.body.removeChild(buttonsContainer);
        resultsPara.style.fontSize = "calc((82px / 100) * 147)";
        userScore === 5 ? resultsPara.textContent = "You're the master of this game" : resultsPara.textContent = "You've just lost to a fucking computer! HAHAHAHAHA";
        replayButton.classList.add("weapon-button");
        replayButton.textContent = "Play again";
        replayButton.style.marginTop = "40px";
        replayButton.addEventListener("click", () => {
            window.location.reload();
        })
        results.appendChild(replayButton);
    }
    scoreboard.textContent = `Player: ${userScore} Computer:  ${computerScore} Ties: ${tieCount}`;
}

