"use strict";

/*
write a linked list with three nodes, A, B, C
 let a = {value: "A", next: b};  …  
 write expression(s) to remove B from the list
 write expression(s) to add B to the end of the list
 write expression(s) to insert Z between C and B
*/

//write a linked list with three nodes, A, B, C
let c = {value: "C", next: null};
let b = {value: "B", next: c};
let a = {value: "A", next: b};  

// write expression(s) to remove B from the lis
a.next = b.next;

//write expression(s) to add B to the end of the list
c.next = b;
b.next = null;

// write expression(s) to insert Z between C and B
c.next = {value: "Z", next = c.next};