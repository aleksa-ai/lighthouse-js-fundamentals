const checkAir = function (samples, threshold) {
  // Code here!
  let numberOfDirtySamples = 0;
  let polutionLevel;

  samples.forEach(function(sample){
    if (sample === "dirty"){
      numberOfDirtySamples++;
    }
  })

if(numberOfDirtySamples === 0){
    polutionLevel = 0;
  } else {
    polutionLevel = numberOfDirtySamples / samples.length;
  }

if(threshold > polutionLevel){
  return "Clean";
} else {
  return "Polluted";
}

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/*
Expected output:
Polluted
Polluted
Clean
*/