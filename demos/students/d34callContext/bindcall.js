
/* eslint-disable */

const me = {
    first: 'Tina',
    last: 'Xing',
    getFullName: function() {
        console.log('this is: ', this);
      console.log( this.first + ' ' + this.last);
    }
  }
  
  me.getFullName();
  console.log("me is: ", me);
console.log("me.getFullName is: ", me.getFullName);
  setTimeout(me.getFullName.bind(me), 1000);