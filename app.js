const playerPointsSpan = document.querySelector('.player_points');
const compPointsSpan = document.querySelector('.comp_points');
const choicesSection = document.querySelector('.choices');
const optionsButtons = document.querySelectorAll('.options button');
const playerChoiceSpan = document.querySelector('.player_choice');
const compChoiceSpan = document.querySelector('.comp_choice');

const resultText = document.querySelector('.result_text');
const resetGameButton = document.querySelector('.reset_game');

let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame(){
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = resultText.innerHTML = "Make your choice";
}

window.onload = setGame();

function playerSelect(e) {
    optionsButtons.forEach((button) => button.classList.remove("active"));
    playerChoice = e.target.dataset.option;
    e.target.classList.add("active");
    resetGameButton.classList.add("active");
    compSelect();
}

const availableCompChoices = ['ROCK', 'PAPER', 'SCISSORS'];

function compSelect(){
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length);  //comp wybiera randomowy index tablixy
    
    compChoice = availableCompChoices[randomIndex];

    checkResult()
}


function checkResult(){
    let result = "";
    if(playerChoice == "ROCK" && compChoice === "SCISSORS" 
        || playerChoice == "PAPPER" && compChoice === "ROCK" 
        || playerChoice == "SCISSORS" && compChoice === "PAPER"){
            result = "You won!";
            playerPoints++;
            playerPointsSpan.innerHTML = playerPoints;
        }

        else if(playerChoice == compChoice){
            result = "DRAW!"
        }
        else {
            result = "You lost!";
            compPoints++;
            compPointsSpan.innerHTML = compPoints;
        }

        choicesSection.classList.add("active");
        playerChoiceSpan.innerHTML = playerChoice;
        compChoiceSpan.innerHTML = compChoice;
        resultText.innerHTML = result;

}



optionsButtons.forEach((button) => button.addEventListener("click", playerSelect));

