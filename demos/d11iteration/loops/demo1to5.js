"use strict";

/*Write coe to print following pattern on the console
11111
22222
33333
44444
55555
*/

for(let i = 1; i<=5; i++){
    let row = "";
    for(let j=1; j<=5;j++){
        row = row + i;
    }
    console.log(row);
    }