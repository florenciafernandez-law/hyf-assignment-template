const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You cannot add an empty name");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Ana");
addStudentToClass("Lars");
addStudentToClass("Sofia");
addStudentToClass("Mads");
addStudentToClass("Julia");
addStudentToClass("Peter");
addStudentToClass("Benjamin");
addStudentToClass("");
addStudentToClass("Queen");

console.log(getNumberOfStudents());
console.log(class07Students);
