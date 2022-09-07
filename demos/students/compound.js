
// 2. Make a defining table and function that will return the balance of a savings account that
// compounds interest monthly. Parameters for the function will be:
// • initial amount
// • annual interest rate
// • number of years to compound
// Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will
// add the appropriate interest each month.
// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));

// Defining table //

// input: initial amount (principle), interest rate(rate), number of years to compound(years)
// output: Total balance after adding monthly compound interest

// process: converting years into month,
// so we can add every month interest
// to the principle and get total balance

function compoundInterest(principle, rate, years) {
  let time = years * 12;
  let totalBalance = principle;
  for (let i = 0; i < time; i++) {
    let interest = (totalBalance * years * rate) / (100 * time);
    totalBalance = totalBalance + interest;
  }

  return Number(totalBalance).toFixed(2);
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10))