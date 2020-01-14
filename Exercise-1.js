/*
*PSEUDOCODE

*buat var counter //untuk menghitung berapa banyak angka pembagi yang menghasilkan angka bulat
*/

function angkaPrima(angka) {
    var counter = 0;
    for(var i=1; i<=angka; i++) {
        if(angka % i === 0) {
            counter++;
        }
    }
    if(counter > 2) {
        return false;
    }else {
        return true;
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false