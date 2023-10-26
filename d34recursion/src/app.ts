
type Person = {
    name: string;
    salary: number;
}

type Department = { [deptName: string]: Person[] | Department };

const company: Department = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],  //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    },
    marketing: {
        social: [{ name: 'Sue', salary: 2000 }, { name: 'Bob', salary: 1800 }],  //subdepartments
        print: [{ name: 'Joe', salary: 1300 }],
        internet: {
            web: [{ name: 'Sam', salary: 2000 }, { name: 'Ben', salary: 1800 }],  //subdepartments
            seo: [{ name: 'John', salary: 1300 }],
            ppc: [{ name: 'Jeff', salary: 1300 }],
        }
    }
};

//   function collectNames(department: Department): string[] {
//     if (Array.isArray(department)) { // case (1)
//         const departmentArray = department as Person[];
//         //return departmentArray.map((person: Person) => person.name);
//         return departmentArray.reduce((prev: string[], current: Person)=>{ prev.push(current.name); return prev}, []); // push returns length of array

//     } else { // case (2)
//         let nameList: string[] = [];
//         for (const subdep of Object.values(department)) {
//             const subDepartment = subdep as Department;
//             const partialNameList = collectNames(subDepartment); // recursively call for subdepartments, sum the results
//             nameList = [...nameList, ...partialNameList];
//         }
//         return nameList;
//     }
// }

// function collectNames(department: Department, returnList: string[]): string[] {
//     //let returnList: string[] = [];
//     if (Array.isArray(department)) { // case (1)
//         const departmentArray = department as Person[];
//         for (const person of departmentArray) {
//             returnList.push(person.name);
//         }
//     } else { // case (2)
//         for (const subdep of Object.values(department)) {
//             const subDepartment = subdep as Department;
//             //const partialNameList = collectNames(subDepartment, returnList); // recursively call for subdepartments, sum the results
//             //returnList = [...returnList, ...partialNameList];
//             collectNames(subDepartment, returnList);
//         }
//     }
//     return returnList;
// }
// collectNames({}, []);
//console.log("list of names: " , collectNames(company, []));

// function sumSalaries(department: Department, sum: number): number {
//     if (Array.isArray(department)) { // case (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//     } else { // case (2)
//         for (let subdep of Object.values(department)) {
//             const subDepartment = subdep as Department;
//             sum += sumSalaries(subDepartment, 0); // recursively call for subdepartments, sum the results
//         }

//     }
//     return sum;
// }
// console.log(sumSalaries(company, 0)); // 6700 [ + 5100 + 6400 ] = 18200

// function collectNamesAccum(department: Department, nameList: string[]): void {
//     //let returnList: string[] = [];
//     if (Array.isArray(department)) { // case (1)
//         const departmentArray = department as Person[];
//         for (const person of departmentArray) {
//             nameList.push(person.name);
//         }
//     } else { // case (2)
//         for (const subdep of Object.values(department)) {
//             const subDepartment = subdep as Department;
//             //const partialNameList = collectNames(subDepartment, returnList); // recursively call for subdepartments, sum the results
//             //returnList = [...returnList, ...partialNameList];
//             collectNamesAccum(subDepartment, nameList);
//         }
//     }
// }

// function collectNames2(department: Department): string[] {
//     const nameList: string[] = [];
//     collectNamesAccum(department, nameList);
//     return nameList;
// }
// console.log("list of names: ", collectNames2(company));


// type ListNode = {
//     value: number;
//     next: ListNode | null;
// }

// let el4 = {
//         value: 4,
//         next: null};

//     let el3 = {
//         value: 3,
//         next: el4};

//     let el2 = {
//         value: 2,
//         next: el3};

//     let list = {
//         value: 1,
//         next: el2};

// // prepend the new value to the list
// let vallist: ListNode = { value: 5, next: list };

// console.log(vallist);

type ValNode = {
    value: number;
    next?: ValNode | null;
}
let list: ValNode;
list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list = { value: 108, next: list };

//console.log(list.next.next);

type NextNode = {
    value: number;
    next: NextNode | null;
}
let nextList: NextNode;

let el4 = {
    value: 4,
    next: null
};

let el3 = {
    value: 3,
    next: el4
};

let el2 = {
    value: 2,
    next: el3
};

nextList = {
    value: 1,
    next: el2
};

nextList  = { value: 108, next: nextList };
nextList!.next!.next = nextList!.next!.next!.next;

let secondList = nextList!.next!.next;
nextList!.next!.next = null;

console.log(secondList);
console.log(nextList);

