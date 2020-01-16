function digitPerkalianMinimum(angka) { 
	//mencari pemfaktoran
	var tampung = [];
	for(var i=1; i<=angka; i++) {
		var pembagi;
		if(angka % i === 0) {
			pembagi = angka/i;
			tampung.push([pembagi+'', i+'']);
		}
	}
//	console.log(tampung)
	
	//mencari digit minumum
	var MIN = 99999;
	for(var j=0; j<tampung.length; j++) {
	    var temp = 0;
	    temp += tampung[j][0].length + tampung[j][1].length;
	    if(temp < MIN) {
	  	  MIN = temp;
	  }
	}
	
	return MIN;
} 
	// TEST CASES 
	console.log(digitPerkalianMinimum(24)); // 2 
	console.log(digitPerkalianMinimum(90)); // 3 
	console.log(digitPerkalianMinimum(20)); // 2 
	console.log(digitPerkalianMinimum(179)); // 4 
	console.log(digitPerkalianMinimum(1)); // 2
