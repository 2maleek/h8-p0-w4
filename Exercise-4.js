//didalam pengulangan lakukan kill / mengubah menjadi string kosong jika arr[i] sama dengan arr[j],
//sehingga didalam array "tampung" tidak ada duplikasi
// array tampung juga menyimpan banyaknya element yang muncul berapa kali, sedikitnya 1
function cariModus(arr) {
    var indexTampung =0;
    var simpanIndex, tampung=[];

    //Memfilter sekaligus menghitung jumlah angka yang sama yang akan di simpan pada array"tampung"
    for(var i=0; i<arr.length; i++) {
      var counter = 1;
      for(var j=i+1; j<arr.length; j++) {
        if(arr[i] === arr[j] && arr[i] !== '') {
          counter++;
          arr[j] = ''; //jika ada nilai yang sama maka arr[j] di hilangkan agar tidak ada duplikasi lagi
        }
      }
      if(arr[i] !== '') {
        tampung.push([arr[i], counter]) // array "tampung" menyimpan nilai dan jumah duplikatnya
      }
    }

    //mencari Modus
    var MAX = tampung[0][1], indexMax = -1;
    for(var i=1; i<tampung.length; i++) {
      if(tampung[i][1] > MAX) {
        indexMax = i;
        MAX = tampung[indexMax][0];
        // console.log('MAX = ', MAX);
      }
    }

    // console.log(tampung)
    if(tampung.length === 1){
      return -1 ; //untuk jika modus hanya ada 1 nilai
    }else{
      return MAX;
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4 t
  console.log(cariModus([5, 10, 10, 6, 5])); // 5 f
  console.log(cariModus([10, 3, 1, 2, 5])); // -1 f
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3 t
  console.log(cariModus([7, 7, 7, 7, 7])); // -1 t