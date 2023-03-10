
export function filterRange(arr, a, b) {
}


export function filterRangeInPlace(arr, a, b) {

}

/**
 * @returns {Object} extendable calculator object
 */
export function Calculator() {
    this.calculate = function (computeStr) {
        /* parse the string into number operator number */
        const split = computeStr.split(' ');
        const a = +split[0];
        const op = split[1];
        const b = +split[2];
        /* call the method for that operator with given numbers  and return value computed*/
        return this[op](a, b);
    };

    this["+"] = function (num1, num2) { return num1 + num2; };
    this["-"] = function (num1, num2) { return num1 - num2; };
    this.addMethod = function (operator, func) {
        this[operator] = func;
    };
}


export function unique(arr) {
}


export function groupById(array) {
}