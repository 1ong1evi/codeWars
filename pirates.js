const cannonsReady = (gunners) => {
    let counter = 0;
    for(const property in gunners) {
      if(gunners[property] === 'nay') {
        counter += 1;
      }
    }
    
    if(counter > 0) {
      return 'Shiver me timbers!';
    }
    return 'Fire!';
}