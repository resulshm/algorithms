/*
  Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. 
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/
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
