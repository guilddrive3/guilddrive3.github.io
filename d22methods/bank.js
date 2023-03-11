
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/

export const bank = {
    transactionsDB: [],
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};

bank.debit = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    const custBalance = this.getBalance(id);
        /* make sure current balance is > amount */
    if (custBalance > amount){ //post the debit, i.e., make the withdrawal
        customer.customerTransactions.push(-amount);
    }
};

bank.credit = function (id, amount) {
    this.saveTransaction(id, amount);
};

bank.getBalance = function (id) {
    /* the next line will return the first element of transactionsDB that satisfies the test in the find function */
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    let totalAmt = 0;
    for (const amt of customer.customerTransactions){
        totalAmt = totalAmt + amt;
    }
    return totalAmt;
};
console.log("expect 55: ", bank.getBalance(3));



/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
    let totalBalance = 0;
    /* loop through the transactions DB and sum up all the individual customer balances */
    for (const customer of this.transactionsDB){
        totalBalance = totalBalance + this.getBalance(customer.customerId);
    }
    return totalBalance;
};


