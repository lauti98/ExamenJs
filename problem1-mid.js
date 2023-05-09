function sumDigits(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isMultipleOfThree(n) {
  while (n >= 10) {
    n = sumDigits(n);
  }
  return n === 3 || n === 6 || n === 9;
}

console.log(isMultipleOfThree(21)); 
console.log(isMultipleOfThree(339)); 
console.log(isMultipleOfThree(123456789)); 
console.log(isMultipleOfThree(42)); 
console.log(isMultipleOfThree(987654321)); 
