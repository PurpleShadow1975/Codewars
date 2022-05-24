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

// Convert number to reversed array of digits
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
function findNeedle(haystack) {
  for (let i = 0; i <= haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

// Convert a Boolean to a String
function booleanToString(b) {
  return b.toString();
}

// Invert values
function invert(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < 0) {
      newArray[i] = Math.abs(array[i]);
    } else {
      newArray[i] = -Math.abs(array[i]);
    }
  }
  return newArray;
}

//Beginner Series #2 Clock
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Sentence Smash
function smash(words) {
  return words.join(" ");
}

// Complementary DNA
function DNAStrand(dna) {
  let newDNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newDNA = newDNA + "T";
    } else if (dna[i] === "T") {
      newDNA = newDNA + "A";
    } else if (dna[i] === "C") {
      newDNA = newDNA + "G";
    } else if (dna[i] === "G") {
      newDNA = newDNA + "C";
    }
  }
  return newDNA;
}

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// Reverse words
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// You only need one - Beginner
function check(a, x) {
  return a.includes(x);
}

// Get the mean of an array
function getAverage(marks) {
  let length = marks.length;
  let sum = marks.reduce((total, current) => total + current, 0);
  return Math.floor(sum / length);
}

// Beginner - Reduce but Grow
function grow(x) {
  console.log(x.reduce((total, input) => total * input, 1));
}

// Fake Binary
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

// Quarter of the year
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// Sum Array
function sum(numbers) {
  "use strict";
  return numbers.reduce((x, y) => x + y, 0);
}

// Count the monkeys
function monkeyCount(n) {
  const monkeys = [];
  for (let i = 1; i <= n; i++) {
    monkeys.push(i);
  }
  return monkeys;
}

// Vowel Count
function getCount(str) {
  let vowelsCount = 0;
  let split = str.toLowerCase();
  split = split.split("");

  for (let i = 0; i < split.length; i++) {
    if (
      split[i] === "a" ||
      split[i] === "e" ||
      split[i] === "i" ||
      split[i] === "o" ||
      split[i] === "u"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

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

// Convert number to reversed array of digits
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

// MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
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
function findNeedle(haystack) {
  for (let i = 0; i <= haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

// Convert a Boolean to a String
function booleanToString(b) {
  return b.toString();
}

// Invert values
function invert(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < 0) {
      newArray[i] = Math.abs(array[i]);
    } else {
      newArray[i] = -Math.abs(array[i]);
    }
  }
  return newArray;
}

//16/04/2022
//Beginner Series #2 Clock
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Sentence Smash
function smash(words) {
  return words.join(" ");
}

// Complementary DNA
function DNAStrand(dna) {
  let newDNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newDNA = newDNA + "T";
    } else if (dna[i] === "T") {
      newDNA = newDNA + "A";
    } else if (dna[i] === "C") {
      newDNA = newDNA + "G";
    } else if (dna[i] === "G") {
      newDNA = newDNA + "C";
    }
  }
  return newDNA;
}

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// Calculate average
function find_average(array) {
  let sum = array.reduce((total, current) => total + current, 0);
  let result = sum / array.length;
  return result;
}

// Reverse words
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// Detect Pangram

function isPangram(string) {
  let x = [string.toLowerCase().split("")];
  let z;
  console.log(x);
  x.forEach((x, i) => {
    if (
      x.includes("a") &&
      x.includes("b") &&
      x.includes("c") &&
      x.includes("d") &&
      x.includes("e") &&
      x.includes("f") &&
      x.includes("g") &&
      x.includes("h") &&
      x.includes("i") &&
      x.includes("j") &&
      x.includes("k") &&
      x.includes("l") &&
      x.includes("m") &&
      x.includes("n") &&
      x.includes("o") &&
      x.includes("p") &&
      x.includes("q") &&
      x.includes("r") &&
      x.includes("s") &&
      x.includes("t") &&
      x.includes("u") &&
      x.includes("v") &&
      x.includes("w") &&
      x.includes("x") &&
      x.includes("y") &&
      x.includes("z")
    ) {
      z = true;
    } else {
      z = false;
    }
  });
  return z;
}

// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let num1 = 0;
  let count = 0;

  if (input == null || input.length == 0 || input.length == null) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      num1 += input[i];
    } else {
      count += 1;
    }
  }
  if (count === 0 && num1 === 0) {
    return [];
  } else {
    return [count, num1];
  }
}

// Fake Binary
function fakeBin(x) {
  let arr = x.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  return arr.join("");
}

// Is he gonna survive?
function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false;
}

// Calculate BMI
function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Reverse Sequence
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// Opposites attract
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 === 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 !== 0)
  ) {
    return false;
  } else if (
    (flower1 % 2 !== 0 && flower2 % 2 === 0) ||
    (flower1 % 2 === 0 && flower2 % 2 !== 0)
  ) {
    return true;
  }
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};

// Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((a, b) => a + b, 0) + yourPoints) /
      (classPoints.length + 1) <
      yourPoints
      ? true
      : false;
  }
}
