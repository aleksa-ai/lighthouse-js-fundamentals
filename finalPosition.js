const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
//const moves = ['north', 'north', 'west', 'west', 'south', 'west','north']; /*playing with the function*/


function finalPosition(moves){
  let x=0;
  let y=0;
  for (i=0 ; i < moves.length; i++){
    if(moves[i] === 'north'){
      y++;
    }else if (moves[i] === 'south'){
      y--;
    }else if (moves[i] === 'west'){
      x--;
    }else if (moves[i] === 'east'){
      x++;
    }
  }
  return [x,y];
}

console.log(finalPosition(moves));

//Returns [-1, 4]
//Secon line const moves Returns [-3,2]