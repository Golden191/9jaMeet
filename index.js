window.onload = function () {
  console.log("Script loaded!");

  const greetingSpan = document.querySelector("#greeting");
  const welcomeBox = document.querySelector(".welcome-box");
  const preloader = document.getElementById("preloader");

  // Time-based Greeting
  const hours = new Date().getHours();
  let greeting = "Welcome";
  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  greetingSpan.textContent = greeting;

  // Fade-in effect
  setTimeout(() => {
    welcomeBox.classList.add("visible");
  }, 300);

  // Preloader Animation
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1500);

  // Scroll Reveal Effect
  const revealElements = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", function () {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const revealTop = element.getBoundingClientRect().top;
      const revealPoint = 100;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("visible");
      }
    });
  });
};window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 1500);
});
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 1800);
});