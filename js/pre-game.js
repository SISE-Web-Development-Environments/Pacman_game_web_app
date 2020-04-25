$(document).ready(function (e) {

    $("#startGameButton").submit(function (e) { 
         e.preventDefault();
         const Up = $("#upButton :selected").text();
         const Down = $("#downButton :selected").text();
         const Right = $("#rightButton :selected").text();
         const Left= $("#leftButton :selected").text();
         const pointsColor5 = $("#5pointsColor :selected").text();
         const pointsColor15 = $("#15pointsColor :selected").text();
         const pointsColor25 =$("#25pointsColor :selected").text();
         const ballNumber = document.getElementById("ballsNum").value;
         const timeGame = document.getElementById("gameTime").value;
         const monstersNumber= document.getElementById("monstersNum").value;     
         openPage("game");
         Start();
       //  startGame(Up,Down,Right ,Left ,pointsColor5,pointsColor15, pointsColor25,ballNumber,timeGame,monstersNumber);   
    });

    //random game
    $('#randomGameButton').click(function (e) {
        e.preventDefault();
        let colors = ["black", "red", "blue"]
        const color5 = colors[Math.floor(Math.random() * colors.length)];
        const color15 = colors[Math.floor(Math.random() * colors.length)];
        const color25 = colors[Math.floor(Math.random() * colors.length)];
        openPage("game");
        Start();
        // startGame('ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', color5, color15, color25,
        //           Math.floor(Math.random() * (90)) + 50, Math.floor(Math.random() * (10000)) + 60, (Math.floor(Math.random() * (4)) + 1).toString());     
    });

});
