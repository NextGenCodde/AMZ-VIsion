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
            nextEl: ".swiper-button-next",  // Correct next button class
            prevEl: ".swiper-button-prev",  // Correct prev button class
        },
        pagination: {
            el: ".swiper-pagination",      // Pagination element
            clickable: true,               // Make pagination bullets clickable
        },
        autoplay: {
            delay: 3000,                   // Auto-slide every 3 seconds
            disableOnInteraction: false,   // Continue autoplay after interaction
        },
        speed: 500,                       // Transition speed
    });

    console.log("Swiper initialized successfully.");
});


