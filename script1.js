function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // Use percentage instead of vw (better for mobile)
  heart.style.left = Math.random() * 100 + "%";

  // Responsive size based on screen width
  const screenWidth = window.innerWidth;

  let size;
  if (screenWidth < 480) {
    size = Math.random() * 10 + 10; // Mobile
  } else if (screenWidth < 768) {
    size = Math.random() * 15 + 12; // Tablet
  } else {
    size = Math.random() * 20 + 15; // Desktop
  }

  heart.style.fontSize = size + "px";

  // Adjust animation duration based on screen
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";

  // Prevent overflow issues
  heart.style.position = "fixed";
  heart.style.bottom = "-20px";
  heart.style.pointerEvents = "none";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Reduce frequency for mobile performance
let intervalTime = window.innerWidth < 480 ? 500 : 300;

setInterval(createHeart, intervalTime);