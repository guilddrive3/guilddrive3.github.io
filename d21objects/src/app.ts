
// //use this file for any code you want to try out

// /*  Create 3 objects, student1, student2, student3
//  property studentId :  101, 102, 103 respectively
//  property quizAnswers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
//  push the students into an array, quizAnswers
//  write a function to compute the score for a given student
//  computeStudentScore(student1, [3, 1, 2, 4]) should return 3
//  second argument is array of correct answers
// */

// type Student = {
//     studentId: number,
//     quizAnswers: number[]
// }

// const student1: Student = {
//     studentId: 101,
//     quizAnswers: [1, 1, 2, 4]
// };

// const student2 = {
//     studentId: 101,
//     quizAnswers: [2, 1, 2, 2]
// };

// const student3 = {
//     studentId: 101,
//     quizAnswers: [3, 1, 3, 4]
// };

// const quizArray = [student1, student2, student3];

// console.log("expect 3: ", computeStudentScore(student1, [3, 1, 2, 4]));

// function computeStudentScore(stu: Student, quizKey: number[]): number {
//     /* get the student answers */
//     const answers = stu.quizAnswers;
//     /* loop through the parallel arrays and count the matches and return that */

//     let numCorrect = 0;
//     for (let i = 0; i < answers.length; i++) {
//         if (answers[i] === quizKey[i]) {
//             numCorrect = numCorrect + 1;
//         }
//     }
//     return numCorrect;

// }
// student2;
// student3;

// /*  
//  write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.  Their score is the number of correct answers. 
//  expect   [ 3, 2, 3 ]
//  use a helper function to compute the score for a given student
// */
// function gradeQuiz(quizArr: Student[], quizKey: number[]) {
//     /* loop through the students and call the helper to get their score, and push into result */
//     const quizScores: number[] = [];
//     for (const student of quizArr) {
//         quizScores.push(computeStudentScore(student, quizKey));
//         //const stuScore = computeStudentScore(student, quizKey);
//         // quizScores.push(stuScore);
//     }

//     return quizScores;

// }
// console.log("Expect [3, 2, 3] : ", gradeQuiz(quizArray, [3, 1, 2, 4]));

// type Person = {
//     name: string;
//     age: number;
//     job: string;
//     sayHi(this: Person): void;
//   }

// const manager: Person = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer",
//     sayHi: sayHowdy
//   };
//   const intern:  Person= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern",
//     sayHi: sayHowdy
//   };

// function sayHowdy(this: Person) {
// console.log("Hello, my name is ", this.name, ". I am ", this.age);
//   }
//   manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.
//   intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.

// let x = 5;
// let y = {x};
// console.log(y);  //  {x : 5}

// function sum(arr: number[]): number[] {   return arr; }

// const foo = {sum, x };

// console.log("foo is: ", foo);
// console.log("foo.sum is: ", foo.sum);

// console.log("foo.sum([1,2,3] is: ",foo.sum([1,2,3] ));

const numbers: { [key: string]: number } = {
    one: 1,
    two: 22,
    three: 333,
    four: 444,
};

const propertyOrder = ["one", "four", "three", "two",];

//write a for loop to print out the values of the properties according to 
// the property names in the propertyOrder array.  You must use the properties 
// array to access the values.  You cannot directly write console.log(numbers.one)  …
for (const property of propertyOrder) {
    console.log(numbers[property])
}
