// Even Fibonacci numbers
// https://projecteuler.net/problem=2

const fourMilly = 4000000;

const fibs = [1, 2];

let current = 0;
let i = 0;

while (current < fourMilly) {
  current = fibs[i] + fibs[i + 1];
  fibs.push(current);
  i += 1;
}

const sum = fibs.reduce((a, b) => a + b, 0);

console.log(sum);