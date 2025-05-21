    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hiddenPosts = document.querySelectorAll('.hidden-post');
    let currentIndex = 0;
    const loadCount = 3; // Number of posts to show each time

    loadMoreBtn.addEventListener('click', () => {
        for (let i = currentIndex; i < currentIndex + loadCount; i++) {
            if (hiddenPosts[i]) {
                hiddenPosts[i].style.display = "block";
                setTimeout(() => {
                    hiddenPosts[i].style.opacity = 1;
                    hiddenPosts[i].style.transform = "scale(1)";
                }, 50); // Delay for scale effect
            }
        }
        currentIndex += loadCount;

        // Hide button if all posts are shown
        if (currentIndex >= hiddenPosts.length) {
            loadMoreBtn.style.display = "none";
        }
    });
