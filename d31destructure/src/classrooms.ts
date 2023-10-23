
type Classroom = {
    roomNumber: number;
    capacity: number;
    students: Student[];
}

type Student = {
    name: string;
    age: number;
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
function countStudentsInClassroom(classrooms: Classroom[], roomNumber: number): number {
    let count = 0;
    for (const room of classrooms) {
        if (room.roomNumber === roomNumber) {
            count = room.students.length;
        }
    }
    return count;
}

//   2.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a minimum capacity 
//as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
function findClassroomsWithCapacity(classrooms: Classroom[], minCapacity: number): Classroom[] {
    const result: Classroom[] = [];
    for (const room of classrooms) {
        if (room.capacity >= minCapacity) {
            result.push(room);
        }
    }
    return result;
}
//   3.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum age as parameters and 
//returns an array of student objects who are older than the specified age, along with the name of their classroom.
function findStudentsOlderThan(classrooms: Classroom[], minAge: number): {name: string, age: number, roomNumber: number}[] {
    const result: {name: string, age: number, roomNumber: number}[] = [];
    for (const room of classrooms) {
        for (const student of room.students) {
            if (student.age > minAge) {
                result.push({name: student.name, age: student.age, roomNumber: room.roomNumber});
            }
        }
    }
    return result;
}
//   4.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns the average age of students across all classrooms.
//   Test your functions with the provided classrooms array to ensure they work as expected. For example:
//   javascript
function averageStudentAge(classrooms: Classroom[]): number {
    let sum = 0;
    let count = 0;
    for (const room of classrooms) {
        for (const student of room.students) {
            sum += student.age;
            count++;
        }
    }
    return sum / count;
}

export {countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge};


  