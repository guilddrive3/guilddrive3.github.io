export function makeBank() {
    //implement this

    // let btransaction = bank.transactionsDB;
    //const bank = { transactionsDB: [], };
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
    makeBank.getBalance = function (id) {
        const customer = transactionsDB.find(customer => customer.customerId === id);
        let balance = 0;
        for (const trans of customer.customerTransactions) { balance += trans; }
        return balance;
    };
    makeBank.bankBalance = function () {
        let total = 0;
        for (const trans of transactionsDB) {
            total += this.getBalance(trans.customerId);
        }
        return total;
    };

    return makeBank;

}

const myBank = makeBank();
console.log("expect 85: ", myBank.bankBalance());