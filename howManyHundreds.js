//Define a function howManyHundreds

/*Code output example
howManyHundreds(1000);	10
howManyHundreds(894);	8
howManyHundreds(520);	5
howManyHundreds(99);	0
howManyHundreds(0);	0*/


function howManyHundreds (num){
  return ((num - num%100)/100); 
}

//Math.trunc() function returns integer part of number by removing fractional digits

function howManyHundredsMT (num){
  return (Math.trunc(num/100));
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

console.log(howManyHundredsMT(1000), "=?", 10);
console.log(howManyHundredsMT(894), "=?", 8);
console.log(howManyHundredsMT(520), "=?", 5);
console.log(howManyHundredsMT(99), "=?", 0);
console.log(howManyHundredsMT(0), "=?", 0);