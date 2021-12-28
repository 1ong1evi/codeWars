function filter_list(l) {
  //holding variable i of numbers
    let i = [];
    l.forEach(function (x) {
        //checks if the iteration is equal to number
        if (typeof x === 'number') { 
            i.push(x);
        }
    });
    return i;
}
