function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return str === str.split("").reverse().join("");
}

let result = palindrome("eye");
console.log(result);
