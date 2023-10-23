//write any code you want to test here and run with npm run app
import {classrooms, countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge} from './classrooms.js';

console.log(countStudentsInClassroom(classrooms, 102));
console.log(findClassroomsWithCapacity(classrooms, 30));
console.log(findStudentsOlderThan(classrooms, 18));
console.log(averageStudentAge(classrooms));