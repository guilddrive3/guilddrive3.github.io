




// function makeWorker()

// { let name = "Pete";

//     return function() { console.log(name); };

// }

// let name = "John";
// name;
// // create a function

// let work = makeWorker();

// // call it

// work(); // what will it show?

// modify the sum salaries example to 
// log the names to the console
// pretty straightforward

type Person = { name: string; salary: number; }

//index signature since do not know names of properties ahead of time
//Department is an object with an unknwon number and name of properties that are strings and values 
//that are Person[] or Department objects
type Department = { [deptName: string]: Person[] | Department };

const company: Department = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],  //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

const nameList: Person[] = [];

function printNames(department: Department) {
    if (Array.isArray(department)) { // case (1)
        department.forEach(person => nameList.push(person.name));
        return;
    } else { // case (2)
        for (const subdep of Object.values(department)) {
            const subDepartment = subdep as Department;
            printNames(subDepartment); // recursively call for subdepartments, sum the results
        }
        return;
    }
}

printNames(company);

console.log(nameList);


