const Players={};
let player1wins=0;
let player2wins=0;

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
const score1Element=document.getElementById('cur-player-1');
const score2Element=document.getElementById('cur-player-2');
let player1Score=0;
let player1Totals=0;
let player2Score=0;
let player2Totals=0;
const holdBtn=document.getElementById('hold-btn');
const newGameBtn=document.getElementById('newgame-btn');
let player1Name=document.getElementById('player1Name');
let player2Name=document.getElementById('player2Name');
const player1NameHolder=document.getElementById('name1');
const player2NameHolder=document.getElementById('name2');

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

const audioStart=document.getElementById('audio-start');
const audioRoll=document.getElementById('audio-roll');
// 6 6 message with delay=================
const double6Message=document.getElementById("delay-message");
function double6Display(){
    double6Message.style.display='block';
    roll.disabled=true;
    holdBtn.disabled=true;
}
function double6Hide(){
    double6Message.style.display='none';
    roll.disabled=false;
    holdBtn.disabled=false;
}
// Delay message======================

// audio ==========================
function playStartAudio() { 
    audioStart.play(); 
  } 
function pauseStartAudio() { 
   audioStart.pause(); 
  } 
function playRollAudio() { 
    audioRoll.play(); 
  } 

  //audio============================
//players Table===SHOW=TABLE=================
const table=document.getElementById('table');
const player1th=document.getElementById('table-player1-name');
const player2th=document.getElementById('table-player2-name');
const player1td=document.getElementById('table-player1-score');
const player2td=document.getElementById('table-player2-score');
const showBtn=document.getElementById('score-btn');



showBtn.addEventListener('click', e=>{

    table.classList.toggle('table-show');

});
//====================
function checkWinner(){
    if(player1Totals===gameUpTo){
        console.log('Player1 Won');
        player1Holder.appendChild(winnerTag);
        player2Holder.appendChild(loserTag);

        player1wins+=1;
        Players[player1Name.value]=player1wins;
        console.log(Players);
        return true;
    }
    else if(player2Totals===gameUpTo){
        console.log('Player2 Won');
        player2Holder.appendChild(winnerTag);
        player1Holder.appendChild(loserTag);
        player2wins+=1;
        Players[player2Name.value]=player2wins;
        console.log(Players);
        return true;
    }
    else if(player1Totals>gameUpTo){
        console.log('Player1 Lost');
        player2Holder.appendChild(winnerTag);
        player1Holder.appendChild(loserTag);
        player2wins+=1;
        Players[player2Name.value]=player2wins;
        console.log(Players);
        return true;
        
    }
    else if(player2Totals>gameUpTo){
        console.log('Player2 Lost');
        winnerTag.innerText="You Won"
        player1Holder.appendChild(winnerTag);
        player2Holder.appendChild(loserTag);
        player1wins+=1;
        Players[player1Name.value]=player1wins;
        console.log(Players);
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
        playStartAudio();
    }
    player1NameHolder.innerText=player1Name.value.toUpperCase();
    player2NameHolder.innerText=player2Name.value.toUpperCase();

    Players[player1Name.value]=player1wins;
    Players[player2Name.value]=player2wins;

    player1th.innerText=player1Name.value;
    player2th.innerText=player2Name.value;
    

});




const dice1=document.getElementById('dice-1');
const dice2=document.getElementById('dice-2');
const roll=document.getElementById('roll-btn');

roll.addEventListener('click', e=>{
    e.preventDefault();
    // console.log("rol clicked");
    pauseStartAudio();
    playRollAudio();
    const num1=getRandomNumber(6);
    const num2=getRandomNumber(6);
    // console.log(num1);
    // console.log(num2);
    dice1.src = `./img/dice-${num1}.png`;
    dice2.src = `./img/dice-${num2}.png`;

    if(player1==true){
        player1Score+=num1+num2;
        score1Element.innerText=player1Score;
        if(num1===6 && num2===6){
            player1Score=0;
            player1Totals=0;
            score1Element.innerText=0;
            player1Total.innerText=0;
            player1=false;
            double6Display();
            // setTimeout(double6Display(), 3000);
            setTimeout(double6Hide, 2000);
            
        }
    }
    else if(player1==false){
        player2Score+=num1+num2;
        score2Element.innerText=player2Score;
        if(num1===6 && num2===6){
            player2Score=0;
            player2Totals=0;
            score2Element.innerText=0;
            player2Total.innerText=0;
            player1=true;
            double6Display();
            // setTimeout(double6Display(), 3000);
            setTimeout(double6Hide, 2000);

            
        }
        
    }
    
    
});


holdBtn.addEventListener('click',e=>{
    if(player1Score>0 || player2Score>0){

        if(player1===true){
            player1=false;
            player1Totals+=player1Score;
            player1Total.innerText=player1Totals;
            score1Element.innerText='0';
            //    =============================================
            player1Score=0;
            console.log(player1Totals);
        }
        else if(player1===false){
            player1=true;
            player2Totals+=player2Score;
            player2Total.innerText=player2Totals;
            score2Element.innerText='0';
            player2Score=0;
        }
        if(checkWinner()){
            roll.disabled=true;
            holdBtn.disabled=true;
            
            player1td.innerText=Players[player1Name.value];
            player2td.innerText=Players[player2Name.value];
        }
    }
});

newGameBtn.addEventListener('click',e=>{
    gameStartScreen.style.display='flex';
    roll.disabled=false;
    console.log(roll.disabled);
    holdBtn.disabled=false;
    console.log(holdBtn.disabled);
    player1Score=0;
    player2Score=0;
    player1Totals=0;
    player2Totals=0;
    player1Total.innerText='0';
    player2Total.innerText='0';
    winnerTag.remove();
    loserTag.remove();
    player1=true;
});

