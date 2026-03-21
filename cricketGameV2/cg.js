let userChoice;
let botChoice;

const ResultText = document.querySelector("p");
const ResultArray = document.querySelector("h5");

function batChoice(){
  userChoice = "bat";
  botChoiceGenerate();
  displayResult();
}

function ballChoice(){
  userChoice = "ball";
  botChoiceGenerate();
  displayResult();
}

function stumpChoice(){
  userChoice = "stump";
  botChoiceGenerate();
  displayResult();
}

function botChoiceGenerate(){
  let randomNum = Math.floor(Math.random()*3);

  if(randomNum === 0){
    botChoice = "bat";
  }
  else if (randomNum === 1){
    botChoice = "ball";
  }
  else{
    botChoice = "stump";
  }
}

function displayResult(){
  let result = "";

  if(userChoice === botChoice){
    result = "It's a Tie!";
  } else if(
    (userChoice === "Bat" && botChoice === "Ball") ||
    (userChoice === "Ball" && botChoice === "Stump") ||
    (userChoice === "Stump" && botChoice === "Bat")
  ){
    result = "You Win!";
  } else {
    result = "Bot Wins!";
  }

  ResultText.innerText = `You: ${userChoice} | Bot: ${botChoice} | ${result}`;
}