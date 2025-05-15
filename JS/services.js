function showservicesmene() {
    let servicesmenu = document.querySelector(".servies-menu");
    let menu_li = document.querySelectorAll(".ul-bar li a");
    servicesmenu.classList.add("show"); // Add class to show the menu
    menu_li.forEach((ele) => {
        ele.classList.add("translate-remove");
    });
}

// Close button functionality
let x_mark = document.querySelector(".cross-service");
x_mark.addEventListener("click", function () {
    let servicesmenu = document.querySelector(".servies-menu");
   setTimeout(() => {
     servicesmenu.classList.remove("show");
   }, 450); // Remove the show class

    let menu_li = document.querySelectorAll(".ul-bar li a");
    menu_li.forEach((ele) => {
        ele.classList.remove("translate-remove");
    });
});
