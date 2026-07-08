let menu = document.querySelector("#menu");
let links = document.querySelector("#links");

menu.addEventListener("click", (e) => {
  links.style.display = "block";
});

gsap.from(".hero-about", {
  opacity: 0,
  y: -100,
  duration: 2,
  delay: 0.5,
});
gsap.from(".hero-img img", {
  y: 100,
  opacity: 0,
  duration: 2,
  delay: 0.5,
});

gsap.from(".about-img img", {
  y: 120,
  opacity: 0,
  delay: 0.5,
  duration: 2,
});

gsap.from(".about-info", {
  y: -120,
  opacity: 0,
  duration: 2,
  delay: 0.5,
});
