function printerError(s) {
    const regex = /[n-z]/g;
    let b = s.match(regex);
        
    if(b === null) {
        b = 0;
        const a = s.length
        const numbersAsString = `${b}/${a}`;
        return numbersAsString;
    } else {
        const a = s.length;
        b = s.match(regex).length;
        const numbersAsString = `${b}/${a}`;
        return numbersAsString;
    }
}
