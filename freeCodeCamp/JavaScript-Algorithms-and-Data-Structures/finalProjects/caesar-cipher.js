/*
 Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let ansCodes = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (65 <= charCode && charCode <= 90) {
      if (charCode + 13 > 90) {
        charCode = 64 + charCode - 90;
      }
      charCode = charCode + 13;
    }
    ansCodes.push(charCode);
  }
  return String.fromCharCode(...ansCodes);
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
