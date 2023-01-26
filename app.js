
const getPlayer=()=>{
    return getRandomNumber(1);
};

// Functions
const getRandomNumber=(num)=>{
    return Math.floor(Math.random() * num)+1;
};


// START GAME
const gameScoreInput=document.getElementById("game-score-input");
const startBtn=document.getElementById('start-game-btn');
const currenPlayer1=document.getElementById('cur-player-1');
const currenPlayer2=document.getElementById('cur-player-2');
let currenPlayer1Score=0;
let currenPlayer2Score=0;
const holdBtn=document.getElementById('hold-btn');
const newGameBtn=document.getElementById('newgame-btn');
const player1Total=document.getElementById('player1Total');
const player2Total=document.getElementById('player2Total');
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
    console.log("rol clicked");
    const num1=getRandomNumber(6);
    const num2=getRandomNumber(6);
    console.log(num1);
    console.log(num2);

    // for (let index = 0; index < 6; index++) {
    //     dice1.src = `./img/dice-${index}.png`;
    //     dice1.classList.add("apply-shake");
    //     dice1.style.animation="shake 0.5s";
    // }
    dice1.src = `./img/dice-${num1}.png`;
    dice2.src = `./img/dice-${num2}.png`;
    
    dice1.classList.add("apply-shake");
    dice1.style.animation="shake 0.5s";
    // dice1.style.animationIterationCount="infinite";

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
    if(player1==true)
    {player1=false;}
    if(player1==false)
    {player1=true;}
    console.log(player1);
});

