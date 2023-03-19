/* eslint-disable */
/**
 *  * @param {*} firstname is 
 * @param {*} lastname is
 * @param {*} birthDate is
 * @returns {Object} constructor
 */
function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}

// const userPrototype = {
//     getFullName: getFullName,
//     getAge: getAge
// }
// User.prototype = userPrototype;
User.prototype.getFullName = getFullName;
User.prototype.getAge = getAge;



//User.prototype.sam =  "Sam";

let user1 = new User('John', 'Smith', new Date('2000-02-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
function getFullName() { return this.firstname + ' ' + this.lastname; }
function getAge() { return new Date().getFullYear() - this.birthDate.getFullYear(); }

//console.log("User.prototype: ", User.prototype);
// const userPrototype = {
//     getFullName: getFullName,
//     getAge: getAge
// }
// User.prototype = userPrototype;


// User.prototype.getFullName = getFullName;
// User.prototype.getAge = getAge;
//console.log("User.prototype: ", User.prototype);  //note that we have now reassigned User.prototype to a new obect instead of adding methods to previous object



//complete the code so that the above functions reside in a single object and are inherited by all User //objects that are created using User as a constructor function.
console.log(user1.getFullName()); //John Smith
console.log(user1.getAge()); //23 in 2023
