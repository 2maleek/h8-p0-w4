function cariMedian(arr) {
    //cek ganjil genap jumlah bilangan
    var genap = false, median=0;
    if(arr.length%2 === 0) {
        genap = true
    }

    if(genap) {
        for(var i=arr.length/2-1; i<arr.length/2+1; i++) { //kenapa -1? karena index dimulai dari 0
            median= median + arr[i];
        }
        median = median / 2;
    }else {
        median = arr[Math.ceil(arr.length/2-1)]; //kenapa -1? karena index dimulai dari 0
    }

    return median;
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5