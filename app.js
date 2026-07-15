// To check is it number or not question

let num = 1234567890;

if (/^\d+$/.test(num)) {
  console.log("Number");
} else {
  console.log("Not a number");
}

// To check is it alphabet or not question

let str = "Nikhil99";

if (/^[a-zA-Z]+$/.test(str)) {
  console.log("Alphabet");
} else {
  console.log("Not a Alphabet");
}

// To check is it a special character or not question

let char = "@";

if (/[*&%$#@]/.test(char)) {
  console.log("Special character");
} else {
  console.log("No special character");
}

let character = 9;

if (character >= 0 && character <= 9) {
  console.log("Number");
} else if (character > "A" && character < "Z") {
  console.log("Alphabet");
} else {
  console.log("special character");
}

let str1 = "silent";
let str2 = "listen";

if (str1.length !== str2.length) {
  console.log("Not anagram");
} else {
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");

  if (s1 === s2) {
    console.log("anagram");
  } else {
    console.log("Not anagram");
  }
}

let n = 21;

if (n % 3 == 0 && n % 7 == 0) {
  console.log("divisible by both 3 and 7");
} else {
  console.log("not divisible by both 3 and 7");
}

let n1 = 100;
let n2 = 200;
let n3 = 30;

if (n1 < n2 && n1 < n3) {
  console.log("n1 is small");
} else if (n2 < n1 && n2 < n3) {
  console.log("n2 is small");
} else {
  console.log("n3 is small");
}

let html = 86;
let JS = 90;
let dsa = 80;
let java = 98;
let python = 70;
let AI = 80;

let totalMarks = 600;

let obtainedMarks = html + JS + dsa + java + python + AI;

let percentage = (obtainedMarks / totalMarks) * 100;

console.log(
  "obtained Marks : ",
  obtainedMarks + "/" + totalMarks + " " + "And",
  percentage + "%",
);

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
let sumNumber = 100;
for (let i = 0; i <= sumNumber; i++) {
  sum += i;
}

console.log("sum = ", sum);

let multi = 5;

for (let i = 1; i <= 10; i++) {
  let result = multi * i;

  console.log(result);
}

// let sumNumber = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumNumber += i;
//   }
// }

// console.log(sumNumber);

let prime = 18;
let isPrime = true;

for (let i = 2; i < prime; i++) {
  if (prime % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(prime, " is a prime number");
} else {
  console.log(prime, " is not a prime number");
}

//

let mob = 932296666565989896532;
let count = 0;

while (mob > 0) {
  count++;
  mob = Math.floor(mob / 10);
}

console.log(count);

//

let multiNum = 2345;
let product = 1;

while (multiNum > 0) {
  let digit = multiNum % 10;
  product *= digit;
  multiNum = Math.floor(multiNum / 10);
}

console.log(product);

//

let string = "leveol";
let reverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i];
}

if (reverse === string) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}

//

let fact = 5;
let factorial = 1;

for (let i = fact; i >= 1; i--) {
  factorial *= i;
}

console.log(factorial);

//

let s1 = "listen";
let s2 = "silent";

if (s1.length !== s2.length) {
  console.log("Not anagram");
} else {
  let sort1 = s1.split("").sort().join("");
  let sort2 = s2.split("").sort().join("");

  if (sort1 === sort2) {
    console.log("both are anagrams");
  } else {
    console.log("both are not anagrams");
  }
}

//

let m1 = 121;
let og = m1;
let m2 = 0;

while (m1 > 0) {
  let digit = m1 % 10;
  m2 = m2 * 10 + digit;

  m1 = Math.floor(m1 / 10);
}

console.log(og);
console.log(m2);

if (m2 === og) {
  console.log("palindrome");
} else {
  console.log("Not palindrome");
}

// 15 July 2026

let primeNum = 19;
let isprime = true;

for (let i = 2; i < primeNum; i++) {
  if (primeNum % i === 0) {
    isprime = false;
    break;
  }
}

if (isprime) {
  console.log("prime Number");
} else {
  console.log("not a prime number");
}

// Q.2

let n9 = 20;

for (let i = 2; i <= n9; i++) {
  let IsPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      IsPrime = false;
      break;
    }
  }

  if (IsPrime) {
    console.log(i);
  }
}
