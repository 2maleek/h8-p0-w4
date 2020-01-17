function graduates (students) {
  
  var result = {};
  //membuat key "nama kelas" array, yang nanti nya akan menjadi array of object
  for(var i = 0 ; i < students.length ; i ++){
      result[students[i].class] = [];  
    }
  //  console.log(result)
    
    //grouping dan filter by score > 75
    for(var i = 0 ; i < students.length; i ++){
        var tampung = {};
        for(var j = 0 ; j < students.length ; j ++){
            if(students[i].class === students[j].class && students[i].score > 75){
                tampung.name = students[i].name;
                tampung.score = students[i].score;
                result[students[i].class].push(tampung);
                break;
            }
        }
    }

    return result;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
