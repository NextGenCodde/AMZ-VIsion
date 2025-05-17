function showservicesmene() {
  let servicesmenu = document.querySelector(".servies-menu");
  servicesmenu.style.transform = "translateY(0px)";
  servicesmenu.style.visibility = "visible";
  servicesmenu.style.opacity = "1"; // Add class to show the menu
}

// Close button functionality
let x_mark = document.querySelector(".cross-service");
x_mark.addEventListener("click", function () {
  let servicesmenu = document.querySelector(".servies-menu");
  setTimeout(() => {
    servicesmenu.style.transform = "translateY(-100%)";
    servicesmenu.style.visibility = "hidden";
    servicesmenu.style.opacity = "0"; // Add
  }, 250); // Remove the show class
});
