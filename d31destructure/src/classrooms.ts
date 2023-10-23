export {countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge};

type Classroom = {
    //YOUR CODE HERE
}

type Student = {
    //YOUR CODE HERE
}   


export const classrooms = [
    {
      roomNumber: 101,
      capacity: 30,
      students: [
        { name: "Alice", age: 18 },
        { name: "Bob", age: 19 },
        { name: "Charlie", age: 17 },
      ],
    },
    {
      roomNumber: 102,
      capacity: 25,
      students: [
        { name: "David", age: 20 },
        { name: "Eve", age: 18 },
      ],
    },
    {
      roomNumber: 103,
      capacity: 35,
      students: [
        { name: "Frank", age: 19 },
        { name: "Grace", age: 20 },
        { name: "Helen", age: 17 },
      ],
    },
  ];
//   Write a set of JavaScript functions to perform the following tasks:
//   1.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a roomNumber as parameters and returns the number of students in the specified classroom.


//   2.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a minimum capacity 
//as parameters and returns an array of classroom objects that meet or exceed the specified capacity.

//   3.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum age as parameters and 
//returns an array of student objects who are older than the specified age, along with the name of their classroom.

//   4.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns the average age of students across all classrooms.
//   Test your functions with the provided classrooms array to ensure they work as expected. For example:
//   javascript





  