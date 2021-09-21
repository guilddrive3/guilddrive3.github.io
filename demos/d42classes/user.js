"use strict";

/**
 * 
 * @param {string} name is user name
 * @returns {Object} constructor function
 */
function User(name) {
    this.name = name;
  }
  
  User.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  
  
  
  
  // Usage 
  let user = new User("John");
  user.sayHi();
  console.log(JSON.stringify(User.prototype));
  