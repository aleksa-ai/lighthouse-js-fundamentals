/*3 param
name – a string representing someone's name
yearOfBirth – a number rep year of birth
currentYear – a number rep current year*/

function ageCalculator(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  //console.log(age)
  return name + " is " + age + " years old.";
}



/*If ageCalculator("Suzie", 1983, 2015);
Returns "Suzie is 32 years old."*/

console.log(ageCalculator("Suzie", 1983, 2015));

/*Verify with 
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));*/

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));