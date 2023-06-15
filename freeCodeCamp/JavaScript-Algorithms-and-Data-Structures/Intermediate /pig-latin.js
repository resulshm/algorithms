function translatePigLatin(str) {
  var ans = "";
  var regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    ans = str + "way";
  } else if (str.match(regex) === null) {
    ans = str + "ay";
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    ans = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return ans;
}
translatePigLatin("consonant");
