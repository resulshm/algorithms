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
