let btn = document.querySelector(".btn");
let box = document.querySelector(".div1");
let isclick = false;
btn.addEventListener("click", (e) => {
  if (isclick) {
    box.style.backgroundColor = "orange";
  } else {
    box.style.backgroundColor = "black";
  }
  isclick = !isclick;
});

// practice purpose

let a = 10;
let b = 12;
let temp;

temp = a;
a = b;
b = temp;

console.log("a:", a);
console.log("b:", b);

// Q 2

let x = 12;
let y = 11;

x = x + y;
y = x - y;
x = x - y;

console.log("x = ", x);
console.log("y = ", y);
