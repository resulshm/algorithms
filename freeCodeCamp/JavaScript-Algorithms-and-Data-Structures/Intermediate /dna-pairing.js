function pairElement(str) {
    let result = []
    let arr = str.split("")
    for (let letter of arr) {
        let pair = [letter]
        switch (letter) {
            case "A":
                pair.push("T")
                break;
            case "T":
                pair.push("A")
                break;
            case "C":
                pair.push("G")
                break;
            case "G":
                pair.push("C")
                break;
        }
        result.push(pair)
    }
    return result;
  }
  
let result = pairElement("GCG");

console.log(result)