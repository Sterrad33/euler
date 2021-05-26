// Largest prime factor
// https://projecteuler.net/problem=3

const mystNum = 600851475143;

const primeFactorsArr = [];
const factorsArr = [];

const remNum = mystNum;

const isPrime = (num) => {
  for (let z = 2; z < num; z += 1) { if (num % z === 0) return false; }
  return true;
}

for (let i = 0; i < Math.ceil(Math.sqrt(mystNum)) + 1; i += 1) {
  if (mystNum % i === 0) {
    factorsArr.push(i);
    // console.log('Pushed ', i);
  }
}

for (let i = 0; i < factorsArr.length; i += 1) {
  const isPrimer = isPrime(factorsArr[i]);
  if (isPrimer === true) {
    primeFactorsArr.push(factorsArr[i]);
  }
}

console.log(Math.max(...primeFactorsArr));