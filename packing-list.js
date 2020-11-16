const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

//Iterating Over an Array With for
/*for(let i = 0; i < packingList.length; i++){
  console.log(packingList[i]);
}*/

//Iterating Over an Array With while
let i=0
while (i < packingList.length){
  console.log(packingList[i])
  i++;
}