// Largest palindrome product
// https://projecteuler.net/problem=4

function isPalindrome(num) {
  if (num.toString() === num.toString().split('').reverse().join('')) {
    return true;
  }
  return false;
}

const allPalindrome = [];

const digits = 3; // change this for bigger largest palindrome product

let largestDigitNumber = '';
let largestTenDigitNumber = '1';

for (let z = 0; z < digits; z += 1) {
  largestDigitNumber += '9';
}

for (let z = 0; z < (digits - 1); z += 1) {
  largestTenDigitNumber += '0';
}

for (let i = parseInt(largestTenDigitNumber, 10); i <= parseInt(largestDigitNumber, 10); i += 1) {
  for (let k = parseInt(largestTenDigitNumber, 10); k <= parseInt(largestDigitNumber, 10); k += 1) {
    if (isPalindrome(k * i)) {
      console.log('Added ', k * i);
      allPalindrome.push(k * i);
    }
  }
}

console.log('Largest palindrome product is ', Math.max(...allPalindrome));
