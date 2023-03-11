/* eslint-disable require-jsdoc */
const phone = "456 789 345 590";

const phoneArr = phone.split(" ");

function middle(a, b){
    return a[1] - b[1];
}

console.log(phoneArr.sort(middle));


