function largestOfFour(arr) {
  let resArr = [];
  for (let subArr of arr){
    let biggest = subArr[0];
    for (let num of subArr){
      if (num>biggest){
        biggest= num;
      }
    } resArr.push(biggest);  
  }
  return resArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
