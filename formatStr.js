function list(names){
     let str = ''; // return a string
  if (names.length !== 0) { // if its not []
       let last = names.pop();
       str = names.map( (val, i, arr) => {
         if (i !== arr[arr.length - 1]) {
           return val.name;
         }
       }).join(', ')
        
       str += str !== '' ? ' & ' + last.name : last.name;
     }
      
     return str;
   
   }
   
  //console.log(list([{name: 'Bart'}]));
  
  //testing area
  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
  //list([{name: 'Bart'},{name: 'Lisa'}]);
  //list([{name: 'Bart'}]);
  //console.log(list([]));