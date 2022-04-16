console.log("hello world!");
let userWin = 0;
let computerWin = 0;

const selection = ["rock", "paper", "scissors"];
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);   //return a number between 0-2
    return selection[randomNumber];
}

function playerPlay() {
    let playerSelection = Number(prompt("1->rock, 2->paper, 3->scissrs"));
    
    if(isNaN(playerSelection) || playerSelection < 1 || playerSelection > 3) {
        console.log("NOT A VALID INPUT!!");
        return;
    }
    return selection[playerSelection-1];
}

function playRound(playerSelect, computerSelect) {
    let result = "";
    if(playerSelect === computerSelect) {
        result = `Tie!, You both selected ${playerSelect}`;
    }
    else if(playerSelect == "rock" && computerSelect == "paper" || 
            playerSelect == "paper" && computerSelect == "scissors" || 
            playerSelect == "scissors" && computerSelect == "rock" ) {
        result = `You Lose!, ${computerSelect} beats ${playerSelect}`;
        computerWin++;
    }
    else if(playerSelect == "rock" && computerSelect == "scissors" || 
            playerSelect == "paper" && computerSelect == "rock" || 
            playerSelect == "scissors" && computerSelect == "paper") {
        result = `You Win!, ${playerSelect} beats ${computerSelect}`;
        userWin++;
    }
    else {
        result = "Invalid Input!";
    }

    return result;
}

function playGame() {
    for(let i=0; i<5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let result;
        result = playRound(playerSelection, computerSelection);
        console.log(result);   
        console.log(`User: ${userWin}`);
        console.log(`Computer: ${computerWin}`);
    }
    userWin > computerWin ? console.log("You won this game!!") : userWin < computerWin ? console.log("You lost this game!!") : console.log("This game was a Tie!!");
    userWin = 0;
    computerWin = 0;
}

playGame();




