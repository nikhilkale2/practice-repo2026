let str = "b";

if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
  console.log("vowel");
} else {
  console.log("consonant");
}

// ---------------------------------------------//

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
