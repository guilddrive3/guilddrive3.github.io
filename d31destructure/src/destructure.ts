/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
type SalaryObj = { [key: string]: number };


export function topSalary(salaries: SalaryObj): string {
    let topPaid = "none";
    let topSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topPaid = name;
        }
    }
    return topPaid;
}


