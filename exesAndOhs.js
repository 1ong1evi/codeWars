function XO(str) {
  let x = 0;
  let o = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'x') {
            x += 1;
        } else if (str[i] === 'X') {
            x += 1;
        } else if (str[i] === 'o') {
            o += 1;
        } else if (str[i] === 'O') {
            o += 1;
        }
    }
    if(str === '') {
        return true;
      //loose equality among the same data type to return true
    }  else if (x == o) { 
        return true;
    } else {
        return false;
    }
}