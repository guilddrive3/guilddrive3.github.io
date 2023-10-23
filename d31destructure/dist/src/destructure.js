export function topSalary(salaries) {
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
