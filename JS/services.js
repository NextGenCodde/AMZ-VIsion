function showservicesmene() {
  let servicesmenu = document.querySelector(".servies-menu");
  servicesmenu.style.zIndex = '1001'
  servicesmenu.style.transform = "translateY(0px)";
  servicesmenu.style.visibility = "visible";
  servicesmenu.style.opacity = "1"; // Add class to show the menu
  document.body.style.overflow = "hidden";
}

// Close button functionality
let x_mark = document.querySelector(".cross-service");
x_mark.addEventListener("click", function () {
  let servicesmenu = document.querySelector(".servies-menu");
  setTimeout(() => {
    document.body.style.overflow = "auto";
    servicesmenu.style.transform = "translateY(-100%)";
    servicesmenu.style.visibility = "hidden";
    servicesmenu.style.opacity = "0"; // Add
  }, 250); // Remove the show class
});
