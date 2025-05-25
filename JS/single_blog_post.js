
//header color changing

document.addEventListener("DOMContentLoaded", function () {
  const whitelogo = document.querySelector(".white-logo");
  const blacklogo = document.querySelector(".black-logo");
  let contect_btn = document.querySelector(".contact-btn");
  const darkSections = document.querySelectorAll(".dark-bg");
  const mainmenu = document.querySelector(".menu-main-menu-container ");
  const burgermenu = document.querySelectorAll("#menu-burger span");
  const menulist = document.querySelectorAll(".before-span span");

  const observer = new IntersectionObserver(
    (entries) => {
      // Check if any of the dark sections are in view
      const anyInView = entries.some((entry) => entry.isIntersecting);

      if (anyInView) {
        // At least one .dark-bg section is at top
        whitelogo.style.display = "block";
        blacklogo.style.display = "none";
        contect_btn.classList.add("blackside");
        mainmenu.style.marginLeft = "0px";
        mainmenu.style.transition = "none";
        burgermenu.forEach((ele) => (ele.style.background = "#fff"));
        menulist.forEach((ele) => {
          ele.style.color = "#fff";
          ele.style.fontWeight = "400";
        });
      } else {
        // No dark-bg section at top
        whitelogo.style.display = "none";
        blacklogo.style.display = "block";
        contect_btn.classList.remove("blackside");
        mainmenu.style.marginLeft = "-70px";
        mainmenu.style.transition = "none";
        burgermenu.forEach((ele) => (ele.style.background = "#000"));
        menulist.forEach((ele) => {
          ele.style.color = "black";
        });
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -90% 0px",
      threshold: 0,
    }
  );

  darkSections.forEach((section) => observer.observe(section));
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