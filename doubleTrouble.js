function trouble(x, t){
    for(var i=0; i<x.length; i++) {
        console.log(x[i] + x[i+1])
        //1 + 3 = 4 and so on due to the iterating variable being plused one meaning that its starting position is not 0 instead the next value
        if(x[i]+x[i+1]===t) {
        x.splice(i+1,1);
        
        i--;
      }
    }
    
    return x;
  }