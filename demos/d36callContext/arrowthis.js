"use strict";


const abc = {
    name: "",
    log: function() {
      this.name = "Hello";
      console.log(this.name); //Hello
      const setFrench = (newname => this.name = newname);  //inner function
      setFrench("Bonjour");
      console.log(this.name); //Bonjour
    }
  };
  
  abc.log();
  