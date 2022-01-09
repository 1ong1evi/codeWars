const rps = (p1, p2) => {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';
    if(p1 === p2) {
      return 'Draw!';
    } else if (p1 === r && p2 === p) {
      return 'Player 2 won!';
    } else if (p1 === p && p2 === r) {
      return 'Player 1 won!';
    } else if (p1 === p && p2 === s) {
      return 'Player 2 won!';
    } else if (p1 === s && p2 === p) {
      return 'Player 1 won!';
    } else if (p1 === r && p2 === s) {
      return 'Player 1 won!';
    } else if (p1 === s && p2 === r) {
      return 'Player 2 won!';
    }
};