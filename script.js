document.getElementById('heart-button').addEventListener('click', function() {
    // Hide heart container and show message container
    document.getElementById('heart-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'flex';

    // Fade in text with slight delay
    setTimeout(() => {
        document.getElementById('main-message').classList.add('show-text');
        document.getElementById('sweet-message').style.opacity = 1;
        document.getElementById('final-message').style.opacity = 1;
    }, 300);

    // Fade in images with staggered effect
    const images = document.querySelectorAll('.background-image');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = 1; // Make them fully visible
        }, 500 + (index * 200)); // Staggered effect
    });
});
