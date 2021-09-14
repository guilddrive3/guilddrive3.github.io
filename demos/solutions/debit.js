
/* eslint-disable */

function debit(amount) {
    console.log(this);     
    this.balance = this.balance - amount; 
    console.log(this); 
    console.log(this.balance);   
}
const account = {  balance: 10, debit: debit };
const myDebit = account.debit;
myDebit(5);