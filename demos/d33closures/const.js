function counter () {
    let count = 0;
    const counterObj = {};
  
    counterObj.setCount = function(newVal) {
        count = newVal;
    };
    counterObj.getCount = function() {
      return count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.setCount(100) ); // ?
  console.log( counter.getCount() ); // ?

  //Revealing Module Design Pattern
