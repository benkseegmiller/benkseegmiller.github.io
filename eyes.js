// Select all pupil elements
const pupils = document.querySelectorAll('.pupil');

window.addEventListener('mousemove', (e) => {
  pupils.forEach((pupil) => {
    // Get the exact center coordinates of the eyeball
    const eye = pupil.parentElement;
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 1;

    /* 
       Calculate the angle between the eye center 
       and the mouse pointer using trigonometry
    */
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

    /* 
       Determine how far the pupil can move from the center.
       Adjust this number (maxDistance) to fit your custom eye sizes.
    */
    const maxDistance = 11; 
    const moveX = Math.cos(angle) * maxDistance;
    const moveY = Math.sin(angle) * maxDistance;

    // Apply the tracking movement to the pupil using CSS transform
    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});