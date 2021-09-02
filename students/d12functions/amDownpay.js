"use strict";
/*
    Input:
        - Total cost of house
    Output:
        - total down payment
    process:
        - if the cost of the house is less than 50k, downpayment
        will be 5% of the cost, if between 50k and 100k, 10% from
        the cost deducted 50k+2500,if between 100k and 200k, 15% from
        the cost deducted 100k+7500, if above then deduct cost-200k the multiply
        by 10% and add 5000.
 */
function calcDownpayment(totalCost) {
    let downPayment = 0;
    if (totalCost > 0 && totalCost < 50000) {
        downPayment = 5 / 100 * totalCost;
    } else if (totalCost >= 50000 && totalCost < 100000) {
        downPayment = 10 / 100 * (totalCost - 50000) + 2500;
    } else if (totalCost >= 100000 && totalCost < 200000) {
        downPayment = 15 / 100 * (totalCost - 100000) + 7500;
    } else if (totalCost >= 200000) {
        downPayment = 10 / 100 * (totalCost - 200000) + 5000;
    }
    return downPayment;
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 5000: ", calcDownpayment(200000));