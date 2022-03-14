"use strict";
/* global exports */
/* exports at end of file since exporting an object, which can only be referenced after definition 
 comment out when running in browser */


const Person = function() {};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
};

const Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject){
    return (this.name + " just learned " + subject);
};

const john = new Student();

john.initialize("John", 25);
console.log(john.learn("Inheritance"));

/* Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:

[teacher's name] is now teaching [subject]
*/

const Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return (this.name + " is now teaching " + subject);
};

const obinna = new Teacher();

obinna.initialize("Obinna", 45);
console.log(obinna.teach("Software Engineering"));




/* comment out when running in browser */
module.exports = {Teacher, Student}; 