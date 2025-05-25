const loadMoreBtn = document.getElementById("loadMoreBtn");
const hiddenPosts = document.querySelectorAll(".hidden-post");
let currentIndex = 0;
const loadCount = 3; // Number of posts to show each time

loadMoreBtn.addEventListener("click", () => {
  for (let i = currentIndex; i < currentIndex + loadCount; i++) {
    if (hiddenPosts[i]) {
      hiddenPosts[i].style.display = "block";
      setTimeout(() => {
        hiddenPosts[i].style.opacity = 1;
        hiddenPosts[i].style.transform = "scale(1)";
      }, 50); // Delay for scale effect
    }
  }
  currentIndex += loadCount;

  // Hide button if all posts are shown
  if (currentIndex >= hiddenPosts.length) {
    loadMoreBtn.style.display = "none";
  }
});

let point = document.createElement("div");
point.className = "point";
document.body.appendChild(point);

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX + 10;
  mouseY = e.clientY + 10;
  point.style.display = "block";
});

// Animate with SMOOTH trail
function animatePointer() {
  const speed = 0.1; // 👈 this controls SMOOTHNESS

  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  point.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animatePointer);
}

animatePointer();
