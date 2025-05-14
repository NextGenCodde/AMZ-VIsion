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

///portfolio js

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const gallery = document.querySelector(".image-gallery");

  // Function to filter and display items
  const filterItems = (category) => {
    // First mark all items for hiding
    items.forEach((item) => {
      if (!item.classList.contains("hidden")) {
        item.classList.add("hide");
        item.classList.remove("show");
      }
    });

    // Short delay to allow hide animation to start
    setTimeout(() => {
      items.forEach((item) => {
        // Check if item should be hidden by Load More
        const isHidden = item.classList.contains("hidden");

        // Apply filter
        if (category === "all" || item.classList.contains(category)) {
          if (!isHidden) {
            item.classList.remove("hide");
            setTimeout(() => {
              item.classList.add("show");
            }, 50);
          }
        } else {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      });

      // Check if we need to show the load more button
      checkLoadMoreVisibility(category);
    }, 300); // Give more time for the hide animation
  };

  // Function to check if we need to show the load more button
  const checkLoadMoreVisibility = (category) => {
    const hasHiddenItems = Array.from(items).some(
      (item) =>
        item.classList.contains("hidden") &&
        (category === "all" || item.classList.contains(category))
    );

    loadMoreBtn.style.display = hasHiddenItems ? "inline-block" : "none";

    // Show overlay when there are hidden items
    const overlay = document.querySelector(".gallery-fade-overlay");
    if (hasHiddenItems) {
      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 300);
    } else {
      overlay.style.opacity = "0";
    }
  };

  // Add click event to filter buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Get filter category
      const category = btn.getAttribute("data-filter");

      // Apply filter
      filterItems(category);
    });
  });

  // Load More functionality
  loadMoreBtn.addEventListener("click", () => {
    // Get current active category
    const activeCategory = document
      .querySelector(".filter-btn.active")
      .getAttribute("data-filter");

    // Hide the overlay when loading more images
    document.querySelector(".gallery-fade-overlay").style.opacity = "0";

    // Remove hidden class from items matching the active category
    let hasNewItems = false;

    items.forEach((item) => {
      if (
        item.classList.contains("hidden") &&
        (activeCategory === "all" || item.classList.contains(activeCategory))
      ) {
        item.classList.remove("hidden");
        item.classList.add("hide");
        hasNewItems = true;

        // Trigger show animation
        setTimeout(() => {
          item.classList.remove("hide");
          item.classList.add("show");
        }, 50);
      }
    });

    // Hide the button after loading all items
    if (!hasNewItems) {
      loadMoreBtn.style.display = "none";
    } else {
      // Check if there are more items to load
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

  // Elements to update
  let menulist = document.querySelectorAll("#menu-main-menu li a");
  let mainmenu = document.querySelector("#menu-main-menu");
  let menubtn = document.querySelector(".custom-btn");
  let whitelogo = document.querySelector(".white-logo");
  let blacklogo = document.querySelector(".black-logo");
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
      // Light header background

      menulist.forEach((ele) => {
        ele.style.color = "black";
        ele.style.fontWeight = "500";
        mainmenu.style.marginLeft = "-70px";
        menubtn.classList.add("blackistbtn");
      });
    } else {
      // Change to white logo and dark menu
      whitelogo.style.display = "block";
      blacklogo.style.display = "none";
      // Dark header background

      menubtn.classList.remove("blackistbtn");
      menulist.forEach((ele) => {
        ele.style.color = "#fff";
        mainmenu.style.margin = "0px";
      });
    }
  });
});

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
