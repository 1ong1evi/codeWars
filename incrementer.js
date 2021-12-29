function incrementer(nums) { 
    //holding area for the edited arrays  
    let newNums = [];
    let l = nums.length;
    for(let i = 0; i < l; i++) {
      //if no value given return empty array
      if(nums === []) {
        return newNums;
      }
    //formula for incrementing each value by its index
    let result = (nums[i] + i) + 1;
      //checks if strings length is greater than a single digit
      if(`${result}`.length > 0) {
      //if true changes it to a string gets the last digit then converts it back to a number
      let str = result.toString();
      let lastDigit = str.charAt(str.length - 1);
      let stringNum = Number.parseFloat(lastDigit);
      newNums.push(stringNum);
      } else {
      newNums.push(result);
      }
    }
    return newNums;
}