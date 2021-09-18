"use strict";

const abc = {
    salute: "",
    greet: function() {
      const self = this;
      self.salute = "Hello";
      console.log(self.salute); //Hello
      const setFrench = function(newSalute) {  //inner function
        self.salute = newSalute;
      };
      setFrench("Bonjour");
      console.log(self.salute); //Bonjour
    }
  };
  
  abc.greet();
  