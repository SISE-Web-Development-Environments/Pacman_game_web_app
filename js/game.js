var context; 
var shape = new Object(); //shape use to save the pacman's location
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

$(document).ready(function() {
	context = canvas.getContext("2d"); 
	Start(); 
});

function Start() {
	board = new Array(); // board is 2d array
	score = 0;
	pac_color = "yellow"; 
	var cnt = 100;  // cnt use to define percent
	var food_remain = 50; // how much food will be in the game (here is 50 - need to change!)
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i < 10; i++) { // i-col
		board[i] = new Array(); // create another array in board[i], therefore is 2d array
		//put walls in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) { // row
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
                board[i][j] = 4; // 4 represents a wall in the game 

            // define food     
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) { //if the percentage of food is greater than we set, so ew put 1
					food_remain--;
					board[i][j] = 1; // 1 represents food
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) { //if pacman is not defined We'll place the pacman 
					shape.i = i; //pacman's start location
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2; // 2 represents the pacman
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board); //findRandomEmptyCell - return empty cells
		board[emptyCell[0]][emptyCell[1]] = 1; //put 1 that represents food in the empty cell
		food_remain--;
	}
	keysDown = {}; // keysDown is a Dictionary
	addEventListener("keydown",function(e) { // e is the key that pressed
            keysDown[e.keyCode] = true; //put true in the key pressed, so we know it is pressrd   
		},
		false
	);
	addEventListener(
		"keyup",function(e) {
			keysDown[e.keyCode] = false;
		},
		false
    );
    
    interval = setInterval(UpdatePosition, 250); //updatePosition call each 250 ms (It's important to "catch" what's coming back from setInterval so that we can clear it at the end of the game)
    
} //close start()


function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) { // 38 is the code of up key
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score; //update score
	lblTime.value = time_elapsed; // update time
	for (var i = 0; i < 10; i++) { 
		for (var j = 0; j < 10; j++) {
			var center = new Object(); // start drawing from center
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) { // 2 represents the pacman
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; 
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; 
				context.fill();
			} else if (board[i][j] == 1) { // 1 represents the food
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //food's color
				context.fill();
			} else if (board[i][j] == 4) { // 4 represents the wall
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; 
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0; // first we remove the pacman (put 0 in the cell)
	var x = GetKeyPressed();
	if (x == 1) { // 1 is up
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) { 
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}
