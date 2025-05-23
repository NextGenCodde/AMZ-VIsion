document.addEventListener("DOMContentLoaded", function () {
  const whitelogo = document.querySelector(".white-logo");
  const blacklogo = document.querySelector(".black-logo");
  const contactBtn = document.querySelector(".contact-btn");
  const mainmenu = document.querySelector(".menu-main-menu-container");
  const burgermenu = document.querySelectorAll("#menu-burger span");
  const menulist = document.querySelectorAll(".before-span span");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 🔥 When dark section hits the header area
          blacklogo.style.display = "block";
          whitelogo.style.display = "none";
          contactBtn.classList.add("blackside");
          mainmenu.style.marginLeft = "-70px";
          burgermenu.forEach((ele) => (ele.style.background = "#000"));
          menulist.forEach((ele) => (ele.style.color = "black"));
        } else {
          // 💡 When it scrolls past the header
          blacklogo.style.display = "none";
          whitelogo.style.display = "block";
          contactBtn.classList.remove("blackside");
          mainmenu.style.marginLeft = "0px";
          burgermenu.forEach((ele) => (ele.style.background = "#fff"));
          menulist.forEach((ele) => {
            ele.style.color = "#fff";
            ele.style.fontWeight = "400";
          });
        }
      });
    },
    {
      root: null,
      threshold: 0, // Trigger right when the top touches
      rootMargin: "0px 0px -90% 0px", // <-- adjust for your header height
    }
  );

  document.querySelectorAll(".dark-bg").forEach((section) => {
    observer.observe(section);
  });
});
