function findUniq(arr) {
    return arr.filter(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(value);
      })[0] || -1;
  }
  
  console.log(findUniq([ 0, 0, 0, 1, 0, 0 ]));