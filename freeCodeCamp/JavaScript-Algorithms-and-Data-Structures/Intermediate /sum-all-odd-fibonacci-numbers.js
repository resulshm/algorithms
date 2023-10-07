/*
  Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the 
two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5
*/

function Fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function sumFibs(num) {
  let sum = 0;
  let seq = 0;
  while (Fibonacci(seq) <= num) {
    if (Fibonacci(seq) % 2 == 1) {
      sum += Fibonacci(seq);
    }
    seq++;
  }
  return sum;
}

let result = sumFibs(1);

console.log(result);
