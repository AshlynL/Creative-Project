(function() {
	"use strict";
    var turn = 0;
    var winner;
    var interval;
    
    window.onload = function(){
        document.getElementById("start").onclick = start;
        var parent = document.getElementById("gamearea");
        for (var i=0; i<9; i++){
            var square = document.createElement("div");
            square.className = "block";
            parent.appendChild(square);
            square.onclick = drawFig;
        }
    }

    function start(){
        turn = 0;
        var tiles = document.querySelectorAll(".block");
        for (var i=0; i<tiles.length; i++){
            tiles[i].innerHTML = "";
            tiles[i].id = "";
            tiles[i].style.backgroundColor = "white";
        }
        displayTurn();  
        clearInterval(interval);
    }
    
    function displayTurn(){
        var player1 = document.getElementById("p1").value;
        var player2 = document.getElementById("p2").value;
        if (turn%2 == 0) {
            document.getElementById("text").innerHTML = player1 + "'s turn";
        }
        else{
            document.getElementById("text").innerHTML = player2 + "'s turn";
        }
    }
    
    function drawFig(){
        if (this.innerHTML == ""){
            if (turn%2==0){
                this.innerHTML = "x";
                this.id = "x";
            }
            else{
                this.innerHTML = "o"
                this.id = "o";
            }
            turn ++;
            displayTurn();
        }
        checkWin();
    }
    function checkWin(){
        var tiles = document.querySelectorAll(".block");
        if (tiles[0].id && tiles[0].id == tiles[1].id && tiles[0].id == tiles[2].id){
            tiles[0].style.backgroundColor = "gold";
            tiles[1].style.backgroundColor = "gold";
            tiles[2].style.backgroundColor = "gold";
            win(tiles[0].id);
            interval = setInterval(winningColors, 500, tiles[0], tiles[1], tiles[2]);
        }
        else if (tiles[0].id && tiles[0].id == tiles[4].id && tiles[0].id == tiles[8].id){
            tiles[0].style.backgroundColor = "gold";
            tiles[4].style.backgroundColor = "gold";
            tiles[8].style.backgroundColor = "gold";
            win(tiles[0].id);
            interval = setInterval(winningColors, 500, tiles[0], tiles[4], tiles[8]);
        }
        else if (tiles[0].id && tiles[0].id == tiles[3].id && tiles[0].id == tiles[6].id){
            tiles[0].style.backgroundColor = "gold";
            tiles[3].style.backgroundColor = "gold";
            tiles[6].style.backgroundColor = "gold";
            win(tiles[0].id);
            interval = setInterval(winningColors, 500, tiles[0], tiles[3], tiles[6]);
        }
        else if (tiles[1].id && tiles[1].id == tiles[4].id && tiles[1].id == tiles[7].id){
            tiles[1].style.backgroundColor = "gold";
            tiles[4].style.backgroundColor = "gold";
            tiles[7].style.backgroundColor = "gold";
            win(tiles[1].id);
            interval = setInterval(winningColors, 500, tiles[1], tiles[4], tiles[7]);
        }
        else if (tiles[2].id && tiles[2].id == tiles[5].id && tiles[2].id == tiles[8].id){
            tiles[2].style.backgroundColor = "gold";
            tiles[5].style.backgroundColor = "gold";
            tiles[8].style.backgroundColor = "gold";
            win(tiles[2].id);
            interval = setInterval(winningColors, 500, tiles[2], tiles[5], tiles[8]);
        }
        else if (tiles[2].id && tiles[2].id == tiles[4].id && tiles[2].id == tiles[6].id){
            tiles[2].style.backgroundColor = "gold";
            tiles[4].style.backgroundColor = "gold";
            tiles[6].style.backgroundColor = "gold";
            win(tiles[2].id);
            interval = setInterval(winningColors, 500, tiles[2], tiles[4], tiles[6]);
        }
        else if (tiles[3].id && tiles[3].id == tiles[4].id && tiles[3].id == tiles[5].id){
            tiles[3].style.backgroundColor = "gold";
            tiles[4].style.backgroundColor = "gold";
            tiles[5].style.backgroundColor = "gold";
            win(tiles[3].id);
            interval = setInterval(winningColors, 500, tiles[3], tiles[4], tiles[5]);
        }
        else if (tiles[6].id && tiles[6].id == tiles[7].id && tiles[6].id == tiles[8].id){
            tiles[6].style.backgroundColor = "gold";
            tiles[7].style.backgroundColor = "gold";
            tiles[8].style.backgroundColor = "gold";
            win(tiles[6].id);
            interval = setInterval(winningColors, 500, tiles[6], tiles[7], tiles[8]);
        }
        else if (tiles[0].id && tiles[1].id && tiles[2].id && tiles[3].id && tiles[4].id && tiles[5].id && tiles[6].id && tiles[7].id && tiles[8].id){
            document.getElementById("text").innerHTML = "Tie game. Play again?";
        }
    }
    function winningColors(one,two,three){
        if (one.style.backgroundColor == "white"){
            one.style.backgroundColor = "gold";
            two.style.backgroundColor = "gold";
            three.style.backgroundColor = "gold";
        }
        else{
            one.style.backgroundColor = "white";
            two.style.backgroundColor = "white";
            three.style.backgroundColor = "white";
        }
    }
    function win(name){
        var player1 = document.getElementById("p1").value;
        var player2 = document.getElementById("p2").value;
        if (name == "x") {
            document.getElementById("text").innerHTML = player1 + " wins! Play again?";
        }
        else{
            document.getElementById("text").innerHTML = player2 +  " wins! Play again?";
        }
    }
})();