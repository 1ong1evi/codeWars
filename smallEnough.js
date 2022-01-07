function smallEnough(a, limit){
    let result = 0;
    let l = a.length;
    for(let i = 0; i < l; i++) {
      if(a[i] > limit) {
        result += 1;
      } 
    }
    if(result > 0) {
      return false;
    }
    return true;
}