const numberOfVowels = function(data) {
  // Put your solution here
  let vowelCount = 0
  const vowels = ['a', 'e', 'i', 'o','u'];

  for (let i = 0; i < data.length; i++){
    if(vowels.includes(data[i])){
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/*
Expected output
3
5
5
*/

//vowels: a, e, i, o, & u