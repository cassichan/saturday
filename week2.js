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

function getStudentsNames(studentsArray) {
    let studentArray = [];
  for (let i = 0; i < studentsArray.length; i++) {
   studentArray.push(studentsArray[i].name)
  }
  return studentArray;
}
console.log(getStudentsNames(students))





