function filter_list(l) {
  // Return a new array with the strings filtered out
  //Input strings and numbers array and filter out the strings to only have numbers
  //filter method??? typeof === string??? can you remove a key value that is equal to a string and still have integars???
    let i = [];
    l.forEach(function (x) {
        if (typeof x === 'number') { 
            i.push(x);;
        }
    });
    return i;
}
