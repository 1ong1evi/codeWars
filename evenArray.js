function evenNumbers(array, number) {
    let l = array.length;
    //returns the even numbers of the array
    const result = array.filter(num => num % 2 === 0);
    for(let i = 0; i < l; i++) {
      //checks if the length of the array is greater than number if so remove first element
      if(result.length > number) {
        result.shift();
      } else {
        return result;
      }
    }
  }