const spans = document.querySelectorAll('.span_1');
const slides = document.querySelectorAll('.slide_shift');

// Default setup: activate first
slides.forEach((slide, i) => {
  if (i === 0) {
    slide.classList.add("active_slide");
    spans[i].classList.remove("opacity_100");
  } else {
    spans[i].classList.add("opacity_100");
  }
});

// Click logic
spans.forEach((span, index) => {
  span.addEventListener('click', function () {
    // Update opacity styles
    spans.forEach(s => s.classList.add('opacity_100'));
    this.classList.remove('opacity_100');

    // Switch slide visibility
    slides.forEach(s => s.classList.remove('active_slide'));
    slides[index].classList.add('active_slide');
  });
});


