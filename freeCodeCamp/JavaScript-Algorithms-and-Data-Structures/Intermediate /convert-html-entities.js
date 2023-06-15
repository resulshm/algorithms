function convertHTML(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");

  return str;
}

let result = convertHTML("Hamburgers < Pizza < Tacos");

console.log(result);
