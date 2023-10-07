/*
  Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {
  let args = arguments;
  if (args.length == 1 && typeof args[0] === "number") {
    return (num) => {
      if (typeof num === "number") {
        return num + args[0];
      }
      return undefined;
    };
  }
  if (
    args.length == 2 &&
    typeof args[0] === "number" &&
    typeof args[1] === "number"
  ) {
    return args[0] + args[1];
  }
  return undefined;
}

let result = addTogether("2", 3);

console.log(result);
