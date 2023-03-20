

/**
 * Illustrates that arrow function will work for method if it is used in the constructor function
 * --since it is a (constructor) function it will have lexical environment
 * --has to be in constructor, so is not on prototype chain (copied in every object instance)
 */
class User {
    /**
     * 
     * @param {String} name is a person's name
     */
    constructor(name) {
        this.name = name;
        this.sayHello = () => console.log("Hello and good day from me, ", this.name);
        //lexical scope is the constructor "function", so this method is an inner function and arrow works in an inner "function"
        //i.e., functions have lexical environments, in contrast to objects
    }
    /**
     * @returns {undefined} 
     */
    sayHi() { console.log("Hi, my name is ", this.name); }
}

let user1 = new User("Fred");
user1.sayHi();
user1.sayHello();

/**
 * my class component
 */
class Component {
    /**
     * 
     */
    constructor() {
        this.count = 0;
        this.increment= () => { this.count++ }
    }

}
