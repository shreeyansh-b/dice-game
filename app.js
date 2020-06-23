/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* solution
var scores, roundScore, activePlayer;
init();

document.querySelector(".btn-roll").addEventListener("click" , function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if(dice !== 1){
        roundScore += dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else{
        nextPlayer();
    }
});

document.querySelector(".btn-hold").addEventListener("click" , function(){
    score[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = score[activePlayer];

    if(score[activePlayer] >= 10){
        document.querySelector("#name-" + activePlayer).textContent = "WINNER!"
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer+ "-panel").classList.remove("active");
        document.querySelector(".player-" + activePlayer+ "-panel").classList.add("winner");
        document.querySelector(".btn-hold").style.display = "none";
        document.querySelector(".btn-roll").style.display = "none";
    }
    else{
        nextPlayer();
    }

    
});

document.querySelector(".btn-new").addEventListener("click" , init);


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".btn-hold").style.display = "block";
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}

*/

/* CHALLENGE


If player rolls 2 sixes in a row entire score(current+score) becomes zero


add an input field so users can set maximum score according to their will

add another dice and player loses current score if either dice is 1

*/


var scores, roundScore, activePlayer, dice2, limit;
init();

document.querySelector(".btn-roll").addEventListener("click" , function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if(dice !== 1){
        if(dice === 6 && dice2 === 6){
            scores[activePlayer] = 0;
            roundScore = 0;
            document.getElementById("score-" + activePlayer).textContent = "0";
            nextPlayer();
        }
        else{
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            dice2 = dice;
        }
    }
    else{
        nextPlayer();
    }
});

document.querySelector(".btn-hold").addEventListener("click" , function(){
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= limit){
        document.querySelector("#name-" + activePlayer).textContent = "WINNER!"
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer+ "-panel").classList.remove("active");
        document.querySelector(".player-" + activePlayer+ "-panel").classList.add("winner");
        document.querySelector(".btn-hold").style.display = "none";
        document.querySelector(".btn-roll").style.display = "none";
    }
    else{
        nextPlayer();
    }

    
});

document.querySelector(".btn-new").addEventListener("click" , init);


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    dice2 = 0;
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice2 = 0;
    limit = parseInt(document.querySelector(".input-limit").value);
    console.log(limit);
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".btn-hold").style.display = "block";
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
