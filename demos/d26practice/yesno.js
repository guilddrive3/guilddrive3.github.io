"use strict";
/* eslint-disable */
/* 3.	Implement the ask function, which should callback the yes function if the user answers 
yes to the question, else calls back the no function. */
//const prompt = require("prompt-sync")();

function ask(question, yes, no) {
    const answer = "yes";  //prompt(question);
    if (answer === "yes") {
        yes();
    } else {
        no();
    }
}
function showOk() {
  console.log ( "You agreed." );
}
function showCancel() {
  console.log ( "You canceled the execution." );
}
//ask("Do you agree?", showOk, showCancel);
//question 4.  
ask("Do you agree?", () => console.log("You agreed"), () => console.log("You cancelled ..."));