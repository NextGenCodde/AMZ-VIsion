let clickedImage = null;

document.querySelectorAll('.trigger-item').forEach(item => {
  item.addEventListener('click', () => {
    clickedImage = item.querySelector('img');
  });
});

barba.init({
  transitions: [{
    name: 'zoom-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    },
    enter(data) {
      const tl = gsap.timeline();
      if (clickedImage) {
        const rect = clickedImage.getBoundingClientRect();
        const clone = clickedImage.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.top = rect.top + 'px';
        clone.style.left = rect.left + 'px';
        clone.style.width = rect.width + 'px';
        clone.style.height = rect.height + 'px';
        clone.style.zIndex = '9999';
        clone.style.objectFit = 'cover';
        document.body.appendChild(clone);

        tl.to(clone, {
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          duration: 0.7,
          ease: 'back.out(1.7)',
          onComplete: () => {
            clone.remove();
          }
        });
      }

      return tl.fromTo(data.next.container, { opacity: 0 }, { opacity: 1, duration: 0.6 });
    }
  }]
});
