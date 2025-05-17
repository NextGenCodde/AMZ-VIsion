// let mobile_menu = document.querySelector(".menu-main-menu-container")
let main_menu = document.querySelectorAll(".before-span");
let mobile_menu = document.querySelector(".menu-main-menu-container");
let menubar = document.querySelector(".button-icon");
let button_wrap = document.querySelector(".button-wrap ");
let cross_btm = document.querySelector(".fa-xmark");
menubar.addEventListener("click", function () {
  mobile_menu.style.opacity = "1";
  setTimeout(() => {
    cross_bt.style.display = "block"
    button_wrap.style.display = "none";
    mobile_menu.style.display = "block";
  }, 100);
  setTimeout(() => {
    main_menu.forEach((ele) => {
      ele.style.opacity = "1";
      ele.style.transform = "translate(0px)";
      ele.style.color = "#fff";
    });
  }, 300);
});

let services_menubar = document.querySelector(".services-menubar");
let sub_menu = document.querySelector(".sub-menu");

services_menubar.addEventListener("mouseenter", function () {
  setTimeout(() => {
    sub_menu.style.display = "block";
  }, 200);
});

services_menubar.addEventListener("mouseleave", function () {
  setTimeout(() => {
    sub_menu.style.display = "none";
  }, 200);
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
