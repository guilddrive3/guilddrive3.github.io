"use strict";


/* the following are solutions for homeworks 5 and 6 of arrays lesson */
/**
 * 
 * @param {Array} studentAnswers an array of arrays
 * @param {Array} correctAnswers array of correct answers
 * @returns{Array} array of students answers
 */
 function scoreExams(studentAnswers, correctAnswers){
    let totalScore =[];
   for(let oneStudentAnswer of studentAnswers ){
       let index =0; 
       let singleScore =0;  
       for(let eachAnswer of oneStudentAnswer){
           if(eachAnswer === correctAnswers[index]){
               singleScore++
           }
           index++;
       }
       totalScore.push(singleScore);
   }
   
   return totalScore;
}

/**
 * 
 * @param {Number} row number of rows in the array
 * @param {Number} colomun  number of colomuns in the array
 * @returns {Array} 2 -dimensional array of sequential numbers
 */
function generateArray(row,colomun){
   let multiArray = [];
   let value = 1 ;

   for(let i=0;i<row;i++){
       let arr =[];
       for(let j =0;j<colomun;j++){
          arr.push(value);
          value++;
       }
       multiArray.push(arr);
   }
   
   return multiArray;

}