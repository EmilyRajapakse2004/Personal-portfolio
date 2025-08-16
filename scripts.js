// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Star Background Animation
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let stars = [];
let width, height;

function initCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach(star => {
    star.x += star.vx;
    star.y += star.vy;
    if(star.x < 0 || star.x > width) star.vx *= -1;
    if(star.y < 0 || star.y > height) star.vy *= -1;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", initCanvas);
initCanvas();
animate();
