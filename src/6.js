// Sum square difference
// https://projecteuler.net/problem=6

let sumOfSqr = 0;
let sumofNums = 0;

for(let i = 0; i <= 100; i += 1) {
  sumOfSqr += Math.pow(i, 2);
  sumofNums += i;
}

console.log(Math.pow(sumofNums, 2) - sumOfSqr);