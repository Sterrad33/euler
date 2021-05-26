// https://projecteuler.net/problem=5
// Smallest multiple

function isEvenly(num) {
	for (let i = 2; i <= 21; i += 1) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}

let noomber = 20

while(true) {
  if(isEvenly(noomber)) {
    break;
  }
  noomber += 20;
}

console.log(noomber)