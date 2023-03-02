

/**
 * @param {number} num is any number
 * @param {number} exponent is a positive integer
 * @returns {number}  number to the power of the exponent
 */
export function pow(num, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * num;
    }
    return result;
}
