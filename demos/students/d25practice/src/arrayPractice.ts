
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr: number[]) {
    return arr.map(num => num * 2);
}

export function doubleAges(arr: Person[]) {
    return arr.map(person => ({ name: person.name, age: person.age * 2 }));

}

export function filterEven(arr: number[]) {
    return arr.filter(num => num % 2 === 0);
}


export function filterOver10(arr: Person    []) {
    return arr.filter(person => person.age > 10);
}

export function findEvenNum(arr: number[]) {
    return arr.find(num => num % 2 === 0);
}

export function findEvenAge(arr: Person[]) {
    return arr.find(person => person.age % 2 === 0);

}

export function includesEvenNum(arr: number[]) {
    if (arr.find(num => num % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}


export function includesEvenAge(arr: Person[]) {
    if (arr.find(person => person.age % 2 === 0)
    ) {
        return true;
    } else {
        return false;
    }
}


