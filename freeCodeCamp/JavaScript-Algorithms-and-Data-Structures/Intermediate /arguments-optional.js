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
