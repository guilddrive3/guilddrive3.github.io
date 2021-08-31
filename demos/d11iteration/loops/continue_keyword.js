"use strict";

// continue inside a for loop
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0)
      continue;
    console.log(i);
  }
  
  // continue inside a while loop
  let j = 0;
  while (j++ <= 20) {
    if (j % 2 !== 0)
      continue;
    console.log(j);
  }
  