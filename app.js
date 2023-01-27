
const getPlayer=()=>{
    return getRandomNumber(1);
};

// Functions
const getRandomNumber=(num)=>{
    return Math.floor(Math.random() * num)+1;
};

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

//////////////////////////////////
// START GAME
const gameScoreInput=document.getElementById("game-score-input");
const startBtn=document.getElementById('start-game-btn');
const currenPlayer1=document.getElementById('cur-player-1');
const currenPlayer2=document.getElementById('cur-player-2');
let currenPlayer1Score=0;
let player1TotalScore=0;
let currenPlayer2Score=0;
let player2TotalScore=0;
const holdBtn=document.getElementById('hold-btn');
const newGameBtn=document.getElementById('newgame-btn');
const player1Total=document.getElementById('player1Total');
const player2Total=document.getElementById('player2Total');

const winnerTag=document.createElement('p');
winnerTag.style.fontSize='20px';
const loserTag=document.createElement('p');
loserTag.style.fontSize='20px';
winnerTag.innerText="You Won"
loserTag.innerText="You Lose"

const player1Holder=document.getElementById('player1Total');
const player2Holder=document.getElementById('player2Total');


function checkWinner(){
    if(player1TotalScore===gameUpTo){
        console.log('Player1 Won');
        player1Holder.appendChild(winnerTag);
        player2Holder.appendChild(loserTag);
        return true;
    }
    else if(player2TotalScore===gameUpTo){
        console.log('Player2 Won');
        player2Holder.appendChild(winnerTag);
        player1Holder.appendChild(loserTag);
        return true;
    }
    else if(player1TotalScore>gameUpTo){
        console.log('Player1 Lost');
        winnerTag.innerText="You Won"
        player2Holder.appendChild(winnerTag);
        player1Holder.appendChild(loserTag);
        return true;
        
    }
    else if(player2TotalScore>gameUpTo){
        console.log('Player2 Lost');
        winnerTag.innerText="You Won"
        player1Holder.appendChild(winnerTag);
        player2Holder.appendChild(loserTag);
        return true;
    }
    return false;
    
}

let gameUpTo=0;
const gameStartScreen=document.getElementById('start-screen');
let player1=true;
startBtn.addEventListener('click', e=>{
    if(gameScoreInput.value.length>0){
        gameUpTo=Number(gameScoreInput.value);
        gameStartScreen.style.display='none';
    }
});

// const firstTurn=getPlayer();
// console.log(firstTurn);
// if(firstTurn===1){
//     player1=true
// }
// else{
//     player1=false;
// }

let current1=0;
let current2=0;

const dice1=document.getElementById('dice-1');
const dice2=document.getElementById('dice-2');
const roll=document.getElementById('roll-btn');

roll.addEventListener('click', e=>{
    e.preventDefault();
    console.log("rol clicked");
    const num1=getRandomNumber(6);
    const num2=getRandomNumber(6);
    console.log(num1);
    console.log(num2);
    dice1.src = `./img/dice-${num1}.png`;
    dice2.src = `./img/dice-${num2}.png`;

    if(player1==true){
        currenPlayer1Score+=num1+num2;
        currenPlayer1.innerText=currenPlayer1Score;
    }
    else if(player1==false){
        currenPlayer2Score+=num1+num2;
        currenPlayer2.innerText=currenPlayer2Score;

    }
});


holdBtn.addEventListener('click',e=>{
    if(player1===true){
        player1=false;
        player1TotalScore+=currenPlayer1Score;
        player1Total.innerText=player1TotalScore;
        currenPlayer1.innerText='0';
        currenPlayer1Score=0;
        console.log(player1TotalScore);
    }
    else if(player1===false){
        player1=true;
        player2TotalScore+=currenPlayer2Score;
        player2Total.innerText=player2TotalScore;
        currenPlayer2.innerText='0';
        currenPlayer2Score=0;
    }
    if(checkWinner()){
        roll.disabled=true;
        holdBtn.disabled=true;
    }
});

newGameBtn.addEventListener(e=>{
    location.href=location.href;
    // window.location.reload();
});