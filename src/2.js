// Even Fibonacci numbers
// https://projecteuler.net/problem=2

const fourMilly = 4000000;

const fibs = [1, 2];

let current = 0;
let i = 0;
let sum = 0;

while (current < fourMilly) {
  current = fibs[i] + fibs[i + 1];
  fibs.push(current);
  i += 1;
}

for (let i = 0; i < fibs.length; i += 1) {
  if (fibs[i] % 2 === 0) sum += fibs[i];
}

console.log(sum);
