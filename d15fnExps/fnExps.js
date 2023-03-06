
/**
 *@returns {number} double the input
 */
 export function double(){
}


/**
 * @returns {number} 100 times the input
 */
export function times100(){
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(array, func){
    const retArray = [];
    for (const element of array){
        retArray.push(func(element));
    }
    return retArray;

}





