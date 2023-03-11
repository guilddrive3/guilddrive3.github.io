//reduce the array to the product of the numbers (“expect 120”)
//reduce the array to the max of the numbers (“expect 5”)

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce(function (sum, current) { return sum + current; }, 0);
let mult = arr.reduce(function (product, current) { return product * current; }, 1);
let max = arr.reduce(function (max, current) { if (current > max) {return current;} else {return max;} }, -Infinity);
let max2 = arr.reduce(function (max, current) { return current > max ? current : max; }, 0);
let maxarrow = arr.reduce( (max, current) => current > max ? current : max, 0);

let prodLast = arr.reduce(last3, 1);

// eslint-disable-next-line require-jsdoc
function last3(product, current,index, arr){
    /* only return new mult if index is one of last 3 */
    if (index >= arr.length - 3){
        return product * current;
    } else {
        return product;
    }
}

console.log("expect 15: ", sum);
console.log("expect 120: ", mult);
console.log("expect 5: ", max);
console.log("expect 5: ", max2);
console.log("expect 5: ", maxarrow);

console.log("expect 60: ", prodLast);



