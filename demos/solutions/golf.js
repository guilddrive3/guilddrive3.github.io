"use strict";
/* eslint-disable */

function calcScores(tournArr){
    return tournArr.map(player => calcSum(player.round1));
}

function calcSum(arr){
    let total = 0;
    for (const num of arr){
        total += num;
    }
    return total;
}

function calcNamedScores(tournArr){
    return tournArr.map(player => {return {player: player.name, score: calcSum(player.round1)} });
}

function reduceScore(player){
    return player.round1.reduce((total, num) => total + num, 0);
}

function calcParScore(scores, par){
    const parScore = [];
    for (let i = 0; i < scores.length; i++){
        parScore.push(scores[i] - par[i]);
    }
    return parScore;
}

function score2par(tournArr, par){
    return tournArr.map(player => {return { name: player.name, par: calcParScore(player.round1, par)}})
}


function hasBirdy(player){
    const parScore = calcParScore(player.round1, par);
    return parScore.includes(-1);
}

function filterUnderPar(tournArr){
    return tournament.filter(player => hasBirdy(player));
}
