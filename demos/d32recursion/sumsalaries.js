"use strict";

let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],  //subdepartments
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

/**
 * 
 * @param {Object} department is a recursive structure of objects and arrays
 * @returns {number} sum of salaries of all employees 
 */
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log("sumSalaries returns : ", sumSalaries(company)); // 6700

/**
* 
* @param {Object} department is a recursive structure of objects and arrays
* @returns {Array} list of names of all employees 
*/
function collectNames(department) {
  if (Array.isArray(department)) { // case (1) -- return array of names for this leaf department
    return department.reduce((prev, current) => { prev.push(current.name); return prev; }, []); // collect the names over the array
  } else { // case (2)
    let namesList = [];  //critical concept -- only come into any execution context call once
    for (let subdep of Object.values(department)) {
      const recursionReturn = collectNames(subdep);
      namesList = namesList.concat(recursionReturn); // recursively call for subdepartments, concat the results
    }
    return namesList;
  }
}
console.log("collectNames returns : ", collectNames(company)); // 6700


const employeeNames = [];
/**
 * 
 * @param {Object} department is a recursive structure of objects and arrays
 * @returns {undefined} writes employee names to a global array -- hack hack 
 * Assumes a global array, employeeNames 
 */
function collectNamesGlobal(department) {
  if (Array.isArray(department)) { // case (1) -- push names to the global array
    for (const employee of department) { //deprtment now an array of employee objects
      employeeNames.push(employee.name);
    }
  } else { // case (2)
    for (let subdep of Object.values(department)) {
      collectNamesGlobal(subdep);
    }
    return;
  }
}
collectNamesGlobal(company);
console.log("collectNamesGlobal result is : ", employeeNames);
