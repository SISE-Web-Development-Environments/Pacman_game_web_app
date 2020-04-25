$(document).ready(function (e) {

    $("#startGameButton").submit(function (e) { 
         e.preventDefault();
         let Up = $("#upButton :selected").text();
         let Down = $("#downButton :selected").text();
         let Right = $("#rightButton :selected").text();
         let Left= $("#leftButton :selected").text();
         let pointsColor5 = $("#5pointsColor :selected").text();
         let pointsColor15 = $("#15pointsColor :selected").text();
         let pointsColor25 =$("#25pointsColor :selected").text();
         let ballNumber = document.getElementById("ballsNum").value;
         let timeGame = document.getElementById("gameTime").value;
         let monstersNumber= document.getElementById("monstersNum").value;     
         openPage("game");
         Start();
       //  startGame(Up,Down,Right ,Left ,pointsColor5,pointsColor15, pointsColor25,ballNumber,timeGame,monstersNumber);   
    });

    //random game
    $('#randomGameButton').click(function (e) {
        e.preventDefault();
        let colors = ["black", "red", "blue"]
        let color5 = colors[Math.floor(Math.random() * colors.length)];
        let color15 = colors[Math.floor(Math.random() * colors.length)];
        let color25 = colors[Math.floor(Math.random() * colors.length)];
        openPage("game");
        Start();
        // startGame('ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', color5, color15, color25,
        //           Math.floor(Math.random() * (90)) + 50, Math.floor(Math.random() * (10000)) + 60, (Math.floor(Math.random() * (4)) + 1).toString());     
    });

});
