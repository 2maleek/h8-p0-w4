function ubahHuruf(kata) {
    kata = kata.split('');
    var huruf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for(var i=0; i<kata.length; i++) {
        var j=0;
        while(kata[i] !== huruf[j]) {         
            j++;
        }

        //pass jika huruf maka kembali ke awal menjadi huruf a
        if(kata[i] !== 'z') {
            kata[i] = huruf[++j];
        }else{
            kata[i] = huruf[0];
        }
    }
    return kata.join('');
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu