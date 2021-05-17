// Multiples of 3 and 5
// https://projecteuler.net/problem=1

for (let i = 0; i < 1000; i += 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}