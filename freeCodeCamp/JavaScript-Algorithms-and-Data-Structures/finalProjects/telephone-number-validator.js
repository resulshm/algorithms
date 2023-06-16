function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;

  return regex.test(str);
}

let result = telephoneCheck("1 555)555-5555");
console.log(result);
