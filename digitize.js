function digitize(n) {
    //holding area to return later
    let newArr = [];
    n = n.toString();
    //splits the string and maps if number is true or false on each char if so converts
    let arr = n.split("").map(Number);
    for(let i = 0; i < arr.length; i++){
     //pushes each single number to the newArr
     newArr.push(arr[i]);
    }
    return newArr;
  }