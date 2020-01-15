function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    result = [];    

    for(var i=0; i<arrPenumpang.length; i++) {
      harga = 0;
      for(var j=0; j<rute.length; j++) {
        if(arrPenumpang[i][1] === rute[j]) {
          while(rute[j] !== arrPenumpang[i][2]) {    
            j++;
            harga += 2000;
          }
        }
      }

      var kalimat = {
          penumpang: arrPenumpang[i][0],
          naikDari: arrPenumpang[i][1],
          tujuan: arrPenumpang[i][2],
          bayar: harga
      }
      result.push(kalimat);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]