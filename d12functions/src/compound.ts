

function compoundInterest(deposit: number, rate: number, years: number) {
    const monthlyRate = rate / 12 / 100;
    const numPayments = years * 12; 
    let balance = deposit;

    for (let i = 1; i <= numPayments; i++) {
        balance = balance + balance * monthlyRate;
        console.log("Balance is: ", balance);
//        debugger;
    }
    return balance;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
