function positiveSum(arr) {
    //holding area of the negative numbers not needed
    let negativeNum = [];
    let result = 0;
    //assigned l to arr.length globally for better code
    let l = arr.length
    for(let i = 0;i < l; i++) {
      if(arr[i] < 0) {
        //if number less than 0 will push into negativeNum array
        negativeNum.push(arr[i])
      } else {
        result += arr[i];
      }
    }
  return result;
  }