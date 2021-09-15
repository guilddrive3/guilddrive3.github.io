"use strict";

let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],  //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


let name = company.sales[1].name;

let salary = company.sales[1].salary;

console.log("name is: ", name);
console.log("salary is: ", salary);

/**
 * 
 * @param {Object} department is a node in the company object
 * @returns {undefined} just logs names to console, no return
 */
function logNames(department) {
    console.log("department is: ", JSON.stringify(department));

    if (Array.isArray(department)) { // case (1)
        /* log out the names of the employees in the array */
        for (const employee of department) {
            console.log("employee name is: ", employee.name);
        }
    } else { // case (2)
        //let sum = 0;
        for (let subdep of Object.values(department)) {
            console.log("subdep is: ", JSON.stringify(subdep));
            logNames(subdep); // recursively call for subdepartments, sum the results
        }
        return;
    }
}

logNames(company);

/**
 * 
 * @param {Object} department is a node in the company object
 * @returns {undefined} just logs names to console, no return
 */
 function collectNames(department) {
    //console.log("department is: ", JSON.stringify(department));

    if (Array.isArray(department)) { // case (1)
        /* log out the names of the employees in the array */
        for (const employee of department) {
            NAME_COLLECTION.push(employee.name);
            //console.log("employee name is: ", employee.name);
        }
    } else { // case (2)
        //let sum = 0;
        for (let subdep of Object.values(department)) {
            //console.log("subdep is: ", JSON.stringify(subdep));
            collectNames(subdep); // recursively call for subdepartments, sum the results
        }
        return;
    }
}

const NAME_COLLECTION = [];
collectNames(company);
console.log("names from collectNames: ", NAME_COLLECTION);

