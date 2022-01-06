function cookingTime(eggs) {
    let timeToCook = 5;
    let pot = 8;
    let math = Math.ceil(eggs/pot);
    if(eggs === 0) {
      return 0;
    } else if (eggs >= 1 && eggs <= pot) {
      return 5;
    } else if (eggs > 8 && eggs <= 16) {
      return 10;
    }
    return math*timeToCook;
}