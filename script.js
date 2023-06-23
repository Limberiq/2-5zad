function combineArrays(){
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
  
    var combinedArray = array1.concat(array2);
  
    document.getElementById('result').innerHTML = combinedArray;
  }