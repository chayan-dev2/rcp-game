
let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=() => {
    const randidx= Math.floor(Math.random() * 3);
    const options=["rock", "paper", "scissors"];
    return options[randidx];
};

const drawGame= () => {
    console.log ("It's a draw!!");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor= "#081b31";
};

const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You won!!");
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        console.log("You lost!!");
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playgame= (userChoice) => {
    console.log(`user-choice= ${userChoice}`);
    compChoice= genCompChoice();
    console.log(`comp-choice= ${compChoice}`);

    if(userChoice===compChoice) {
        drawGame();
    }else {
        let userWin= true;
        if(userChoice==="rock"){
            //paper, scissors
            userWin = compChoice==="scissors" ? true : false;
        }else if(userChoice==="paper"){
            //rock, scissors
            userWin = compChoice==="rock" ? true : false;
        }else{
            //rock, scissors
            userWin = compChoice==="paper" ? true : false;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};

choices.forEach ((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    });
});

