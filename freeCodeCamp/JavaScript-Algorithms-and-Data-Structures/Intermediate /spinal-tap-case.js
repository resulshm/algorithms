function spinalCase(str) {
  let regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(regex, "-").toLowerCase();
}

let result = spinalCase("This Is Spinal Tap");
console.log(result);
