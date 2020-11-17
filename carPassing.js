//carPassing(cars, speed)
//takes in array of car objects & speed of car as it passes the sensor

//function should create new object with property called speed & another property called time + add it to the cars array

//retrieve current time, for setting time property, by using the Date.now() 

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;


const carPassing= function (cars, speed){
  let newCarlList = cars;
  newCarlList.push({
    time: Date.now(),
    speed
  });
  return newCarlList
}

console.log(carPassing(cars, speed));