document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const overlay = document.querySelector(".gallery-fade-overlay");

  // Function to filter and display items
  const filterItems = (category) => {
    items.forEach((item) => {
      const isHidden = item.classList.contains("hidden");
      const matchesCategory =
        category === "all" || item.classList.contains(category);

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
      const matchesCategory =
        activeCategory === "all" || item.classList.contains(activeCategory);

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

document.getElementById("loadMoreBtn").addEventListener("click", function () {
  const hiddenItems = document.querySelectorAll(".gallery-item.hidden");
  hiddenItems.forEach((item) => {
    item.classList.remove("hidden");
  });

  // Optional: Hide the button after loading everything
  this.style.display = "none";
});
