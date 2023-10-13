
/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr: number[], a: number, b: number): number[] {

    return [];
}

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr: number[], a: number, b: number): void {

}

interface Calculator {
    methods: { [key: string]: (a: number, b: number) => number };
    calculate: (str: string) => number;
    addMethod: (name: string, func: (a: number, b: number) => number) => void;
}
export const calculator: Calculator = {

    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },


}

export function unique(arr: string[]): string[] {

    return [];
}

export interface User {
    id: string;
    name: string;
    age: number;
}

export function groupById(users: User[]): { [key: string]: User } {
    // declare usersById to be an object with string keys and User values
    const usersById: { [key: string]: User } = {};  
    // FURTHER IMPLEMENTATION REQUIRED HERE


    return usersById;
}

interface SurnameUser {
    name: string;
    surname: string;
    id: number;
}

interface FullNameUser {
    fullName: string;
    id: number;
}   


export function map2fullName(users: SurnameUser[]): FullNameUser[] {
    let result: { fullName: string, id: number }[] = [];
    // FURTHER IMPLEMENTATION REQUIRED HERE



    return result;
}


export function sortByAge(users: User[]  ): void {
    // FURTHER IMPLEMENTATION REQUIRED HERE
  }

export function findOldest(users: User[]): User {
    let oldest = users[0];
    // FURTHER IMPLEMENTATION REQUIRED HERE



    return oldest;
}

/* getAverageAge using reduce */
export function getAverageAge(users: User[]): number {
    return 0;
}