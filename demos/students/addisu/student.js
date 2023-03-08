// creating student objects
const student1 = {
    studentId: 's101',
    quizAnswers: [1, 1, 2, 4]
  };
  const student2 = {
    studentId: 's102',
    quizAnswers: [2, 1, 2, 2]
  };
  const student3 = {
    studentId: 's103',
    quizAnswers: [3, 1, 3, 4]
  };
  
  // pushing students into an array
  const quiz = [student1, student2, student3];
  
  // function to grade quiz
  function gradeQuiz(quizArray, correctAnswers) {
    const gradeReport = {};
    for (let i = 0; i < quizArray.length; i++) {
      const student = quizArray[i];
      const studentId = student.studentId;
      const quizAnswers = student.quizAnswers;
      let score = 0;
      for (let j = 0; j < quizAnswers.length; j++) {
        if (quizAnswers[j] === correctAnswers[j]) {
          score++;
        }
      }
      gradeReport[studentId] = score;
    }
    return gradeReport;
  }
  
  const correctAnswers = [3, 1, 2, 4];
  const gradeReport = gradeQuiz(quiz, correctAnswers);
  console.log(gradeReport); // expected output: { s101: 3, s102: 2, s103: 3 }
  
  // function to calculate average score
  function calculateAverageScore(gradeReport) {
    let totalScore = 0;
    let totalStudents = 0;
    for (const studentId in gradeReport) {
      totalScore += gradeReport[studentId];
      totalStudents++;
    }
    return totalScore / totalStudents;
  }
  
  const averageScore = calculateAverageScore(gradeReport);
  console.log(averageScore);