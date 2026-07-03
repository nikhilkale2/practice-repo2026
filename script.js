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
