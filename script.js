// function goToNext() {
//   window.location.href = "wish.html";
// }

// // No Button Logic
// const noBtn = document.getElementById("noBtn");

// // Disable click
// noBtn.addEventListener("click", function (e) {
//   e.preventDefault();
// });

// // Move button randomly on hover
// noBtn.addEventListener("mouseover", function () {
//   const x = Math.random() * 200 - 100; // random X movement
//   const y = Math.random() * 200 - 100; // random Y movement

//   noBtn.style.transform = `translate(${x}px, ${y}px) rotate(30deg)`;
// });



function goToNext() {
  window.location.href = "wish.html";
}

const noBtn = document.getElementById("noBtn");

// Prevent default click behavior
noBtn.addEventListener("click", function (e) {
  e.preventDefault();
  moveButton();
});

// Also support touch (mobile)
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveButton();
});

function moveButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Generate random position within screen
  const x = Math.random() * (screenWidth - btnWidth);
  const y = Math.random() * (screenHeight - btnHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Optional rotation for fun 😄
  const rotate = Math.random() * 60 - 30;
  noBtn.style.transform = `rotate(${rotate}deg)`;
}