//smartGarbage(trash, bins)
//1st argument (trash): string tell our function type of item submitted
//2nd argument (bins): object containing 3 properties (waste, recycling, and compost), of numerical value. function must increase the correct value in the bins object, and then return the newly updated object.

const trash = 'recycling';
const bins = {
  waste: 4, 
  recycling: 2, 
  compost: 5
}

function smartGarbage(trash, bins){
  return bins
}

console.log(smartGarbage(trash, bins));