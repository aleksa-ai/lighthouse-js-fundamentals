const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

let judgeVegetable = function(vegetables, metric){
  let initialMax = vegetables[0][metric];
  let submitterIndex = 0;
  vegetables.forEach(function(element, index){
    if (element[metric] >= initialMax){
      initialMax = element[metric];
      submitterIndex = index;
    }
  });
  return vegetables[submitterIndex].submitter;
}

console.log(judgeVegetable(vegetables, metric));