"use strict";
/* eslint-disable */
/* 2.	Make a defining table and function that will return the balance of a savings account that compounds interest monthly.  Parameters for the function will be: 
•	initial amount 
•	annual interest rate
•	number of years to compound


input:  interest rate, years to compound, initial deposit
output:  final balance
processing:
 - divide interest rate by 12 to get monthly interest and by 100 to make it a fraction
 - multiply years by 12 to get number of interest payments
 - loop for the number of interest payments
   -- calculate interest for that month and add to balance
 - report the final balance
 */
function compoundInterest(deposit, rate, years) {
    const monthlyRate = rate / 12 / 100;
    const numPayments = years * 12;
    let balance = deposit;

    for (let i = 1; i <= numPayments; i--) {
        balance = balance + balance * monthlyRate;
//        debugger;
    }
    return balance;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));