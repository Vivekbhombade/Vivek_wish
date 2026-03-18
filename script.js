function goToNext() {
  window.location.href = "wish.html";
}

// No Button Logic
const noBtn = document.getElementById("noBtn");

// Disable click
noBtn.addEventListener("click", function (e) {
  e.preventDefault();
});

// Move button randomly on hover
noBtn.addEventListener("mouseover", function () {
  const x = Math.random() * 200 - 100; // random X movement
  const y = Math.random() * 200 - 100; // random Y movement

  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(30deg)`;
});