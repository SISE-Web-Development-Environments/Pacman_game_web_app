# Assignment2
 
#Pacmen game
url : https://sise-web-development-environments.github.io/assignment2-dana-yarin/
Presenters: Yarin Hayun 311326359 & Dana Sror 204591424
______________________________________________________________________

In order to play you first need to register.	
Afterwards you can log in with your user name and password.

Game  Instructions :
•	Your goal is to eat as many candies as possible so that your score increases.
•	If you have gained more than 100 points you have won.
•	If the monsters eat you 5 time you lose.
•	You have 5 strikes throughout the game. If one of the monsters eat you , your score is down in 10 points. In addition to each monster type there is a different score download as listed below  in bonus part.
•	You can buy extra time if you eat the watch.
•	You can earn 50 extra points if you eat the cherry.

 Game functionality :
-	SetUserSettings – set first settings for each label
-	initClok- set first attributes of clock
-	resetPacman- restart the pacman in new random position after collision 
-	playAudio-start the music
-	stopAudio-stop the music
-	checkCollision- check if the pacmen collide with any monster
-	collision – in case of collision download score and life
-	downScoreByDiffrentMonster -download different score according to the monster
-	moveMonster – move the monsters according of 2 functions: randomMoveMonster and cleverMoveMonster 
-	restMonster – in case of collision rest the monsters positions.
-	setChery – set first attributes of the chery
-	cheryCollision – in case the pacman collide with the chery, raising score +50
-	moveChery – move the chery according to the randomMoveChery function
-	drawMonsters, drawChery, drawGameOver – drawing functions

Bonus part:
•	The player can buy extra time if he eat the watch.
•	For each clash with the monster there is a different score download:
-	Res monster – 20 points
-	Pink monster -15 points
-	Blue monster – 10 points
-	Orange monster – 5 points

