// Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0) return "Even";
  else return "Odd";
}

// Sum of positive
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

// Convert a number to a string
function numberToString(num) {
  return num.toString();
}

// Return Negative
let makeNegative = (num) => (num > 0 ? -num : num);
