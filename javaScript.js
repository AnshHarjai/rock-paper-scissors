let userWin = 0;
let computerWin = 0;

const buttons = document.querySelectorAll('button');
const selection = Array.from(buttons).map(button => button.textContent.toLowerCase());
console.log(selection);

buttons.forEach(button => {
    button.addEventListener('click', playGame);
})


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);   //return a number between 0-2
    return selection[randomNumber];
}



// function playerPlay(e) {
//     // let playerSelection = Number(prompt("1->rock, 2->paper, 3->scissors"));
//     console.log(e.target.textContent.toLowerCase());
//     return e.target.textContent.toLowerCase();
// }

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

function playGame(e) {
    console.log(e.target.textContent.toLowerCase());
    

    let playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = computerPlay();
    let result;
    result = playRound(playerSelection, computerSelection);
    const score = document.querySelector('.result');
    score.textContent = result;
    score.innerHTML += `<br>User: ${userWin}` + `<span>Computer: ${computerWin}<br>`
    console.log(result);   
    console.log(`User: ${userWin}`);
    console.log(`Computer: ${computerWin}`);
    userWin > computerWin ? console.log("You won this game!!") : userWin < computerWin ? console.log("You lost this game!!") : console.log("This game was a Tie!!");
    
    
    const reset = document.createElement('button');
    reset.innerText = 'RESET';
    reset.setAttribute('style', 'height: 42px; font-size: 18px');
    score.appendChild(reset);

    reset.addEventListener('click', resetGame);
    
    function resetGame() {
        userWin = 0;
        computerWin = 0;
        score.textContent = "";
    }
}

// playGame();




