// Add this to your script.js
document.getElementById('heart-button').addEventListener('click', function() {
    // Show the message container
    document.getElementById('message-container').style.display = 'block';
    document.getElementById('heart-container').style.display = 'none';

    // Trigger the fade-in animation by removing opacity (resetting to trigger the animation)
    const images = document.querySelectorAll('.background-image');
    images.forEach(function(image) {
        image.style.opacity = 0;  // Make sure it's hidden initially
        setTimeout(function() {
            image.style.animation = 'fadeIn 1s forwards';  // Apply the fade-in animation
        }, 500);  // Delay slightly to match the CSS animation delay
    });
});
