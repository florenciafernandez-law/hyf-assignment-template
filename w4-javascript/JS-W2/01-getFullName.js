function getFullName(firstName, surname, useFormalName = false) {
 
  if (firstName === "" || surname === "") {
    return "Please write both first name and surname";
  }
 
  let fullName = firstName + " " + surname;
 
  if (useFormalName === true) {
    fullName = "Lord " + fullName;
  }
 
  return fullName;
}
 
const fullName1 = getFullName("Benjamin", "Hughes", true);
const fullName2 = getFullName("Ada", "Lovelace");
 
console.log(fullName1); 
console.log(fullName2); 
console.log(getFullName("", "Hughes"));