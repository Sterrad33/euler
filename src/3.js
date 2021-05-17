// Largest prime factor
// https://projecteuler.net/problem=3

const mystNum = 600851475143;

const primeFactorsArr = [];
const factorsArr = [];

const remNum = mystNum;

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

for (let i = 0; i < mystNum; i += 1) {
  if(mystNum % i === 0) {
    factorsArr.push(i);
    console.log("Pushed ", i);
  }
}

for (let i = 0; i < factorsArr.length; i += 1) {

  if(isPrime(factorsArr[i] === true)) { primeFactorsArr.push(factorsArr[i]); }
}

console.log(Math.max(...primeFactorsArr));