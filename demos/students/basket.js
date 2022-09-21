"use strict";

//The following objects record the season statistics for players on a basketball team.
const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));

/*Be sure to use meaningful variable names and write JSdoc comments for findHighScores and any helper functions. You can write this in VS Code and then paste your solution into Sakai.

		
Model Short Answer
* create high score array
* loop through players of teamStats
* for each player,
** get their stats array
** find max points of the player
** create object with jersey and max points and push to high score array */