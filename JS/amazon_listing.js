// let mobile_menu = document.querySelector(".menu-main-menu-container")
let main_menu = document.querySelectorAll(".before-span");
let lies = document.querySelectorAll(".before-span span");
let mobile_menu = document.querySelector(".menu-main-menu-container");
let menubar = document.querySelector(".button-icon");
let button_wrap = document.querySelector(".button-wrap ");
let cross_btm = document.querySelector(".listing_cross");
menubar.addEventListener("click", function () {
  mobile_menu.style.opacity = "1";
  mobile_menu.style.transition = "all .3s linear";
  mobile_menu.style.marginLeft = "0px";
  setTimeout(() => {
    cross_btm.style.display = "block";
    button_wrap.style.display = "none";
    mobile_menu.style.display = "block";
  }, 100);
  setTimeout(() => {
    main_menu.forEach((ele) => {
      ele.style.opacity = "1";
      ele.style.transform = "translate(0px)";
      ele.style.color = "#fff";
    });
    lies.forEach((ele) => {
      ele.style.color = "white";
    });
  }, 300);
});

function cross_menu() {
  let mobile_menu = document.querySelector(".menu-main-menu-container");
  let button_wrap = document.querySelector(".button-wrap ");
  console.log("corss clicke");
  mobile_menu.style.opacity = "0";
  setTimeout(() => {
    mobile_menu.style.display = "none";
    button_wrap.style.display = "block";
  }, 200);
}

// menu-main-menu-container
//header
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header-container");
  const heroSection = document.querySelector(".hero-section");

  const menubtn = document.querySelector(".menu-btn");

  const observer = new IntersectionObserver(
    (entries) => {
      const heroVisible = entries[0].isIntersecting;

      if (heroVisible) {
        // Hero is in view — remove blur

        header.style.backdropFilter = "blur(0px)";
      } else {
        // Hero is NOT in view — apply blur
        header.style.backdropFilter = "blur(4px)";
      }
    },
    {
      root: null,
      threshold: 0.2, // Adjust if needed; 0.5 = 50% of hero must be visible
    }
  );

  observer.observe(heroSection);
});

let point = document.createElement("div");
point.setAttribute("class", "point");
document.body.append(point);
point.style.display = "none";
window.addEventListener("mousemove", function (e) {
  let x_axis = e.clientX;
  let y_axis = e.clientY;
  point.style.display = "block";
  point.style.top = `${y_axis + 10}px`;
  point.style.left = `${x_axis + 10}px`;
});

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
          ele.style.fontWeight = "500";
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
