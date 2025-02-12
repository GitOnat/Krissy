document.getElementById('heart-button').addEventListener('click', function() {
    // Hide heart container and show message container
    document.getElementById('heart-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'flex';

    // Fade in text
    setTimeout(() => {
        document.getElementById('main-message').style.opacity = 1;
        document.getElementById('sweet-message').style.opacity = 1;
        document.getElementById('final-message').style.opacity = 1;
    }, 300);

    // Fade in images
    const images = document.querySelectorAll('.background-image');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = 1; // Make them fully visible
        }, 500 + (index * 200)); // Staggered effect
    });
});