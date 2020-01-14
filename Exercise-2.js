/*
** var pembagi, terbesar, kecil
* angka1 < angka2 ? kecil = angka1 : kecil = angka2
* for(i=1; i<kecil)
*/


function fpb(angka1, angka2) {
    var pembagi=[], terbesar=0, kecil;
    angka1 < angka2 ? kecil = angka1 : kecil = angka2;
    for(var i=1; i<kecil; i++) {
        if(angka1%i  === 0 && angka2%i === 0) {
            pembagi.push(i);
        }
    }

    for(var i=0; i<pembagi.length; i++) {
        if(pembagi[i] > terbesar) {
            terbesar = pembagi[i];
        }
    }

    return terbesar;
 }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1