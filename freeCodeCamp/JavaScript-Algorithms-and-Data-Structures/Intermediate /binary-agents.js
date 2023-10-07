/*
  Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  let binaryLetters = str.split(" ");
  let lettersCode = [];
  binaryLetters.forEach((value, index) => {
    let decimalLetter = parseInt(value, 2);
    lettersCode.push(decimalLetter);
  });
  return String.fromCharCode(...lettersCode);
}

let result = binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

console.log(result);
