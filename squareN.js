function squareSum(numbers){
    let newArr = [];
    let result = 0;
    //iterates through array while square neach number in numbers array
    for(let i = 0; i < numbers.length; i++) {
      newArr.push(numbers[i] * numbers[i]);
    }
    //adds each altered number to each other and assigns it the result variable
    for(let j = 0; j < newArr.length; j++) {
      result += newArr[j];
    }
    //returns the result
    return result;
  }