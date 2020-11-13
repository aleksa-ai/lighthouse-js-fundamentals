/* define 3 functions to calculate the areas of 3 different shapes:
rectangles - length * width
triangles - base * height /2
circles - π * radius^2 - To access value of π in JS code, use Math.PI */

/* calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)
If any of the parameters are negative, the function should return undefined.
*/



function calculateRectangleArea(length, width){
  if(length > 0 && width > 0){
    return (length*width);
  } else {
    return undefined
  }
}

function calculateTriangleArea(base, height){
  if(base > 0 && height > 0){
    return ((base*height)/2);
  } else {
    return undefined
  }
}

function calculateCircleArea(radius){
  if(radius > 0){
    return (Math.PI * Math.pow(radius, 2)); // Math.pow (base, exponent ) method to get the exponent power of a number; could have done radius*radius too in this case.
  } else {
    return undefined
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
