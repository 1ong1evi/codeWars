function list(names){
    //your code here
 // if(names.length === 0) {
 //     return '';
 // } else if (names.length === 1) {
 //     return names[0];
 // }
    return Object.keys(names)
  }
  //console.log(list([{name: 'Bart'}]));
  
  //testing area
  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
  //list([{name: 'Bart'},{name: 'Lisa'}]);
  //list([{name: 'Bart'}]);
  //console.log(list([]));