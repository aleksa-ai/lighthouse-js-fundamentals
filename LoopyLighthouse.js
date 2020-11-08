//Step 1
/*for (x = 100; x <= 200; x++){
  console.log(x);
}
*/

//Step 2 & 3
for (x = 100; x <= 200; x++){
  if ( x %3 === 0 && x %4 === 0){
    console.log("LoopyLighthouse");
    // console.log(x);
  } else if ( x %3 === 0){
console.log("Loopy");
  } else if (x %4 === 0){
    console.log("Lihthouse");
  } else {
    console.log("Not applicable.");
  }
}

