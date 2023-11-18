
console.log("expect 1, 3, 5, 7, 9, 11 in console:", oddRecurse(12));

function oddRecurse(n: number): void {
    if (n > 0) {
        oddRecurse(n - 1);
        if (n % 2 === 1) {
            console.log(n);
        }
    }
}