"use strict";
/* eslint-disable */

function savingbalance(amount, rate, years) {


    const months = years * 12
    const monthlyInterest = (rate / 100) / 12;


    for (let i = 1; i <= months; i++) {
        amount = amount + (amount * monthlyInterest);
    }

    return amount

}

console.log("expect 110.47:", savingbalance(100, 10, 1));
console.log("expect 16470.09:", savingbalance(10000, 5, 10));