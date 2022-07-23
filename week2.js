//creating an array of objects
let students = [
    {
        name: "maxxx",
        here: true,
    },
    {
        name: "pam",
        here: true,
    },
]

//creating function to return array of strings of student names from an array of students
// function getStudentsNames(studentsArray) {
//     let studentArray = [];
//   for (let i = 0; i < studentsArray.length; i++) {
//    studentArray.push(studentsArray[i].name)
//   }
//   return studentArray;
// }
// console.log(getStudentsNames(students))

//Arrow function
const getStudentsNames = (studentsArray) => {
    let studentArray = [];
  for (let i = 0; i < studentsArray.length; i++) {
   studentArray.push(studentsArray[i].name)
  }
  return studentArray;
}
// console.log(getStudentsNames(students))

//Returns the array of students objects in a table with index. mainly works with objects
// console.table(students)



