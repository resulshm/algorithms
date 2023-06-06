function myReplace(str, before, after) {
  if (/[A-Z]/.test(before)){
    return str.replace(before, after[0].toUpperCase() + after.substring(1))
  }
    return str.replace(before, after.toLowerCase());
}
  
let result = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

console.log(result)