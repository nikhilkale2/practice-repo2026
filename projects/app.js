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

gsap.from(".card-box", {
  y: -50,
  opacity: 0,
  duration: 0.7,
  delay: 0.4,
});

gsap.from(".card-box2", {
  y: -60,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
});

gsap.from(".card-box3", {
  y: -70,
  opacity: 0,
  duration: 0.9,
  delay: 0.8,
});

gsap.from(".card-box4", {
  y: -50,
  opacity: 0,
  duration: 0.9,
  delay: 1,
});

gsap.from(".card-box5", {
  y: -60,
  opacity: 0,
  duration: 0.9,
  delay: 1.2,
});

gsap.from(".card-box6", {
  y: -70,
  opacity: 0,
  duration: 0.9,
  delay: 1.4,
});
