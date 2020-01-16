function highestScore (students) { 
	//grouping
	var kelas = [students[0]["class"]];
	console.log(students[0].class)
	for(var i=1; i<students; i++){
		var tambah = '';
		console.log('luar')
		for(var j=0; j<kelas.length; j++){
			console.log('dalem')
			if(kelas[j] !== students[i].class && tambah !== kelas[j]){
				console.log('masuk')
				tambah = students[i].class;
			}
		}
		if(tambah !== '') {
			kelas.push(tambah);
		}
	}
	console.log(kelas);
} 
// TEST CASE 
console.log(highestScore([ 
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
	// foxes: { name: 'Dimitri', score: 90 }, 
	// wolves: { name: 'Alexei', score: 85 } 
// } 
	console.log(highestScore([ 
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
	// foxes: { name: 'Alexander', score: 100 }, 
	// wolves: { name: 'Alisa', score: 76 }, 
	// tigers: { name: 'Viktor', score: 80 } 
// } 
console.log(highestScore([])); 
//{}
