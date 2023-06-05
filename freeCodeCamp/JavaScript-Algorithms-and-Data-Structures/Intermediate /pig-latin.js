function translatePigLatin(str) {
    var ans = "";
    var regex = /[aeiou]/gi;
    
    // Check if the first character is a vowel
    if (str[0].match(regex)) {
      ans = str + "way";
    } else if (str.match(regex) === null) {
      // Check if the string contains only consonants
      ans = str + "ay";
    } else {
      // Find how many consonants before the first vowel.
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      // Take the string from the first vowel to the last char
      // then add the consonants that were previously omitted and add the ending.
      ans = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return ans;
  }
  
  // test here
  translatePigLatin("consonant");