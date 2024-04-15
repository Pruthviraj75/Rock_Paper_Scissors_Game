let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("User choice : ",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice : ",compChoice);

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // opt scissors and paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // opt rock and scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // opt rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});