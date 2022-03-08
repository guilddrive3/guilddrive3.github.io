"use strict";

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  /* insert a node with value 3.5 after the node with value 3 */

  /* find node with value 3 */
  let temp = list;
  //console.log("temp is : " , temp);
  let node3 = null;
  while (temp !== null){   //loop through the list to find the target node
      if (temp.value === 3){
          console.log("found node 3: ", temp);
          node3 = temp;
      }
      temp = temp.next;
  }

  const node3_5 = {value: 3.5, next:  null};

  node3_5.next = node3.next;
  node3.next = node3_5;

  console.log("new list: ", JSON.stringify(list));