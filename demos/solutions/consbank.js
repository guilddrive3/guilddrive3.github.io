"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { MakeBank }; //add all of your function names here that you need for the node mocha tests


/* 6.	Modify your solution for the bank problem from yesterday to use a constructor function instead of an object factory.  
Use the consBankTests.js mocha file.  You will need to copy your bank.js and modify it. 
*/

/**
 * @returns {bank} constructor function that builds and returns bank object
 */
function MakeBank() {
    //implement this
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];

   // const bank = { transactionsDB: [], };

   //const bank = { };

    // bank.transactionsDB = [
    //     { customerId: 1, customerTransactions: [10, 50, -40] },
    //     { customerId: 2, customerTransactions: [10, 10, -10] },
    //     { customerId: 3, customerTransactions: [5, -5, 55] }];

    this.getBalance = function (custId) {
       // const customer = bank.transactionsDB.find(customer => customer.customerId === custId);
       const customer = transactionsDB.find(customer => customer.customerId === custId);
        let balance = 0;
        for (const trans of customer.customerTransactions) { balance += trans; }
        return balance;
    };

    this.bankBalance = function () {
        let total = 0;
       // for (const trans of this.transactionsDB) {
        for (const trans of transactionsDB) {
            total += this.getBalance(trans.customerId);
        }
        return total;
    };

   // return bank;
}