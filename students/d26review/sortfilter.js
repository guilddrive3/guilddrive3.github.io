"use strict";

let st3={
    name:"bacn",
    mark :97
}
let st4={
    name:"der",
    mark :95
}
let st5={
    name:"kee",
    mark :94
}
let a=200;
let b=190;
//let arr=[st1,st2,st3,st4,st5];
let arr=[st3,st4,st5];
 let m= arr.map((key)=>{
      key.mark=key.mark*2;
      return key;
  });
console.log(m);
let z=m.filter((key)=>key.mark>190&&key.mark<200?key:null);

 

console.log(z);  //this it work
////////////////////////////////////////////////////////////////////////////////////////////////
const mapfilter = arr.map((key)=>{
      key.mark=key.mark*2;
      return key;
  }).filter((key)=>key.mark>190&&key.mark<200?key:null);

  console.log("mapfilter returns: ", mapfilter);
