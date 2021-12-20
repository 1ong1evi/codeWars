function bump(x){
//count how many bumps are in the road which is the character n
let bumps = 0;
//iterating through the array to find instances of n
for(let i = 0; i < x.length; i++) {
    if(x[i] === 'n') {
        bumps += 1;
    }
}
    //if the number of bumps is greater than return Car Dead else Woohoo!
    if(bumps > 15) {
        return 'Car Dead.';
    } else {
        return 'Woohoo!';
    }
}
