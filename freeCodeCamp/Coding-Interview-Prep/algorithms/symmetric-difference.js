/*
    Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in 
either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression
involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
*/

function sym(...args) {
  if (args.length == 2) {
    return symDiff(args[0], args[1]);
  }
  return sym(symDiff(args[0], args[1]), ...args.slice(2));
}

function symDiff(arr1, arr2) {
  let result = [];
  arr1.forEach((elem) => {
    if (result.indexOf(elem) == -1 && arr2.indexOf(elem) == -1) {
      result.push(elem);
    }
  });

  arr2.forEach((elem) => {
    if (result.indexOf(elem) == -1 && arr1.indexOf(elem) == -1) {
      result.push(elem);
    }
  });
  console.log(result);
  return result;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
