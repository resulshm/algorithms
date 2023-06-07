function Fibonacci(n) {
    if (n==0) {
        return 0
    }
    if (n==1) {
        return 1
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}

function sumFibs(num) {
    let sum = 0
    let seq = 0 
    while (Fibonacci(seq) <= num) {
        if ((Fibonacci(seq) % 2) == 1) {
            sum += Fibonacci(seq)
        }
        seq++
    }
    return sum;
  }
  
  
let result = sumFibs(1);

console.log(result)