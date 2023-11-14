/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
export function inArray(arr) {
    return function (arg) {
        return arr.includes(arg);
    };
}
/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
export function inBetween(low, high) {
    return function (arg) {
        return arg >= low && arg <= high;
    };
}
/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
    let shooters = [];
    console.log("makeArmy called");
    let i = 0;
    while (i < 10) {
        const k = i;
        let shooter = function () {
            console.log(k); // that should show its number
            return k;
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }
    // ...and return the array of shooters
    return shooters;
}
//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...
