"use strict";
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList:  function() {
    this.students.forEach(
      function(student){console.log(this.title + ": " + student);}  //error – ‘this’ is undefined (or window)

    );
  }
};
group.showList();
  