const urlEncode = function(text) {
  // Put your solution here
  text = text.trim();

  for(let i = 0; i < text.length; i++){
    if(text[i] === " "){
      text = text.substr(0,i) + "%20" + text.substr(i+1);
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
Expected ouput:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/
