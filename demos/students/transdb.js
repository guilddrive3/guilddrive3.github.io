"use strict";
/* eslint-disable */

const bank = { transactionsDB: [], };
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [25, -5, 55] }];
//return array with all customers who had deposits greater than 20.  
//array should contain objects with customerId and the transaction amount for each such transaction
function findTransactionsByAmount(bank) {
    //const obj = [];
    const foundDepositsArray = [];
    //for (const val of bank.customerTransactions) {
    const filterTransactions = [];
    for (const customerObj of bank.transactionsDB) {
        //now loop through this customers transactions and save any that are > 20
        for (const transAmount of customerObj.customerTransactions) {
            if (transAmount > 20) {
                foundDepositsArray.push({ custId: customerObj.customerId, amount: transAmount });
            }
        }
    }
    return foundDepositsArray;
}
//         const trans = {};
//         trans.myGreater = myGreater(val.bank.customerTransactions)
//         obj.push(trans);
//     }
//     return obj;

// }

// function myGreater(arr) {
//     let above20 = 0;
//     for (const num of arr) {
//         if (num > 20) {
//             above20 = num;
//         }
//     }
//     return above20;
// }
console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ",
    findTransactionsByAmount(bank));
