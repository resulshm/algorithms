function destroyer(arr) {
  let result = [];
  let input = arguments[0];
  let elems = [...arguments].slice(1);
  for (let i = 0; i < input.length; i++) {
    if (elems.indexOf(input[i]) == -1) {
      result.push(input[i]);
    }
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
