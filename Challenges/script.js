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

// Reverse String
function solution(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Convert boolean to string
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Square(n)Sum
function squareSum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }
  return sum;
}

// RemoveStringSpaces
function noSpace(x) {
  return x.replace(/\s+/g, "");
}

// Convert a String to a Number
let stringToNumber = function (str) {
  return Number(str);
};

// Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
}

// String repeat
function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// Grasshopper - Summation
let summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

// Counting sheep
function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      counter += 1;
    }
  }
  return counter;
}

// 7th Kyu

// Highest and Lowest
function highAndLow(numbers) {
  let arr = numbers.split(" ");
  arr.sort((a, b) => a - b);
  let high = arr.pop();
  let low = arr.shift();

  if (low === undefined) {
    low = high;
  }
  return high + " " + low;
}

// Greet Me
let greet = function (name) {
  name = name.toLowerCase();
  name = name.replace(name[0], name[0].toUpperCase());

  return `Hello ${name}!`;
};

// 6kyu

// Multiples of 3 or 5
function solution(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// Stay Hydrated
function litres(time) {
  return Math.floor(time / 2);
}

// Century from Year
function century(year) {
  return Math.ceil(year / 100);
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Returning strings

// onvert number to reversed array of digits
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// Abbreviate a Two Word Name
function abbrevName(name) {
  let name1 = name.split(" ");
  return (
    name.split(" ")[0][0].toUpperCase() +
    "." +
    name.split(" ")[1][0].toUpperCase()
  );
  console.log(name1[0][0].toUpperCase + "." + name1[1][0].toUpperCase);
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else return false;
}

// Beginner - Lost Without a Map
function maps(x) {
  return (y = x.map((x) => x * 2));
}

// A Needle in the Haystack
