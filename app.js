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
