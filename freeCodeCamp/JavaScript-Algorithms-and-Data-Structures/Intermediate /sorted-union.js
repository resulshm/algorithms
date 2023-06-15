function uniteUnique(arr) {
  let args = arguments;
  let answer = [];
  for (let i = 0; i < args.length; i++)
    for (let j = 0; j < args[i].length; j++) {
      if (answer.indexOf(args[i][j]) == -1) {
        answer.push(args[i][j]);
      }
    }
  return answer;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(result);
