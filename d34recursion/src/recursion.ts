
export   { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}

function sumTo(n: number): number {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function factorial(n: number): number {

    return n;
}
