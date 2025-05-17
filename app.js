window.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".swiper-button-prev");
  const rightArrow = document.querySelector(".swiper-button-next");

  // Add active class on left arrow click
  leftArrow.addEventListener("click", function () {
    leftArrow.classList.add("active");
    rightArrow.classList.remove("active");
    // console.log("Left arrow clicked - active class added");
  });

  // Add active class on right arrow click
  rightArrow.addEventListener("click", function () {
    rightArrow.classList.add("active");
    leftArrow.classList.remove("active");
    // console.log("Right arrow clicked - active class added");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next", // Correct next button class
      prevEl: ".swiper-button-prev", // Correct prev button class
    },
    pagination: {
      el: ".swiper-pagination", // Pagination element
      clickable: true, // Make pagination bullets clickable
    },
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after interaction
    },
    speed: 500, // Transition speed
  });

  console.log("Swiper initialized successfully.");
});

document.addEventListener("DOMContentLoaded", function () {
  const children = document.querySelectorAll(".scroll-section .child");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove 'left-side-border-black' from all children and add 'left-side-border'
          children.forEach((child) => {
            child.classList.remove("left-side-border-black");
            child.classList.add("left-side-border");
          });

          // Add 'left-side-border-black' to the visible child and remove 'left-side-border'
          entry.target.classList.add("left-side-border-black");
          entry.target.classList.remove("left-side-border");
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  // Observe each child element
  children.forEach((child) => {
    observer.observe(child);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const overlay = document.querySelector(".gallery-fade-overlay");

  // Function to filter and display items
  const filterItems = (category) => {
    items.forEach((item) => {
      const isHidden = item.classList.contains("hidden");
      const matchesCategory = category === "all" || item.classList.contains(category);

      // Hide all items initially
      if (!matchesCategory || isHidden) {
        item.classList.add("hide");
        item.classList.remove("show");
      } else {
        // Remove hide class to prepare for transition
        item.classList.remove("hide");
        
        // Trigger reflow for smooth transition
        void item.offsetWidth; 
        
        // Use requestAnimationFrame to ensure smooth transition
        requestAnimationFrame(() => {
          item.classList.add("show");
        });
      }
    });

    checkLoadMoreVisibility(category);
  };

  // Check visibility of Load More button and overlay
  const checkLoadMoreVisibility = (category) => {
    const hasHiddenItems = Array.from(items).some(
      (item) =>
        item.classList.contains("hidden") &&
        (category === "all" || item.classList.contains(category))
    );

    loadMoreBtn.style.display = hasHiddenItems ? "inline-block" : "none";
    overlay.style.opacity = hasHiddenItems ? "1" : "0";
  };

  // Add click event to filter buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Get filter category
      const category = btn.getAttribute("data-filter");

      // Apply filter smoothly
      filterItems(category);
    });
  });

  // Load More functionality
  loadMoreBtn.addEventListener("click", () => {
    const activeCategory = document
      .querySelector(".filter-btn.active")
      .getAttribute("data-filter");

    overlay.style.opacity = "0"; // Hide overlay while loading

    let hasNewItems = false;

    items.forEach((item) => {
      const matchesCategory = activeCategory === "all" || item.classList.contains(activeCategory);

      if (item.classList.contains("hidden") && matchesCategory) {
        item.classList.remove("hidden");
        item.classList.add("show");
        hasNewItems = true;
      }
    });

    if (!hasNewItems) {
      loadMoreBtn.style.display = "none";
    } else {
      checkLoadMoreVisibility(activeCategory);
    }
  });

  // Initialize with "all" filter
  filterItems("all");
});





const lazyloadRunObserver = () => {
  const lazyloadBackgrounds = document.querySelectorAll(
    `.e-con.e-parent:not(.e-lazyloaded)`
  );
  const lazyloadBackgroundObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyloadBackground = entry.target;
          if (lazyloadBackground) {
            lazyloadBackground.classList.add("e-lazyloaded");
          }
          lazyloadBackgroundObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px 0px 200px 0px" }
  );
  lazyloadBackgrounds.forEach((lazyloadBackground) => {
    lazyloadBackgroundObserver.observe(lazyloadBackground);
  });
};
const events = ["DOMContentLoaded", "elementor/lazyload/observe"];
events.forEach((event) => {
  document.addEventListener(event, lazyloadRunObserver);
});

//header

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the custom scrollbar
  const scrollbar = Scrollbar.init(document.querySelector("#content-scroll"));
let header  = document.querySelector("header")
  // Elements to update
  let menulist = document.querySelectorAll("#menu-main-menu li a");
  let mainmenu = document.querySelector("#menu-main-menu");
  let menubtn = document.querySelector(".custom-btn");
  let whitelogo = document.querySelector(".white-logo");
  let blacklogo = document.querySelector(".black-logo");
  let burgermenu = document.querySelectorAll("#menu-burger span");
  // Ensure header element is selected
  
  // Track scroll position with the custom scrollbar
  scrollbar.addListener(({ offset }) => {
    // Select all sections with the same ID or class
    const sections = document.querySelectorAll("#section1");
    
    // Flag to track if any section is in the viewport
    let sectionInView = false;

    sections.forEach((section) => {
      // Get the section's top and bottom position relative to the viewport
      const sectionTop = section.getBoundingClientRect().top + offset.y;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Check if the scrollbar offset is within any section's range
      if (offset.y >= sectionTop && offset.y <= sectionBottom) {
        sectionInView = true;
      }
    });

    // Update the header and menu styles based on section visibility
    if (sectionInView) {
      // Change to black logo and light menu
      whitelogo.style.display = "none";
      blacklogo.style.display = "block";
      header.style.backdropFilter = "blur(4px)";
      // Light header background
      burgermenu.forEach((ele) =>{
        ele.style.background ="#000"
      })
      menulist.forEach((ele) => {
        ele.style.color = "black";
        ele.style.fontWeight = "500";
      });
      mainmenu.style.marginLeft = "-70px";
      menubtn.classList.add("blackistbtn");
    } else {
      // Change to white logo and dark menu
      whitelogo.style.display = "block";
      blacklogo.style.display = "none";
      mainmenu.style.marginLeft = "auto";
      header.style.backdropFilter = "blur(0px)";
      // Dark header background
      burgermenu.forEach((ele) =>{
        ele.style.background ="#fff"
      })
      menubtn.classList.remove("blackistbtn");
      menulist.forEach((ele) => {
        ele.style.color = "#fff";
        mainmenu.style.margin = "auto";
      });
    }
  });
});
//menubar
let menubar = document.querySelector("#burger-wrapper");
let burgermenu = document.querySelectorAll("#menu-burger span");
let menulist = document.querySelectorAll("#menu-main-menu li a");
let mainmenu = document.querySelector("#menu-main-menu");
menubar.addEventListener('click' , function(){
  burgermenu.forEach((ele)=>{
    ele.style.background = "#fff"
  })
console.log('menubar clcked');

      menulist.forEach((ele) => {
        ele.style.color = "white";
      });
  
  mainmenu.style.margin = "auto"
  
})
//work section scroll

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".wp-section-wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sections.forEach((sec) => sec.classList.remove("active"));
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
