function isPrime(p) {
    const a = Math.round(Math.sqrt(p))
    if (p == 2) {
        return true
    }
    if (p % 2 == 0) {
        return false
    }
    for (let i = 3; i<=a; i+=2){
        if (p % i == 0) {
            return false
        }
    }
    return true
}

function sumPrimes(num) {
    let sum = 0
    if (num <= 2) {
        return 2
    }
    sum += 2
    for (let i = 3; i<=num; i+=2){
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum;
  }
let result = sumPrimes(10);

console.log(result)