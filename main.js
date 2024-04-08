// JavaScript for animations

document.addEventListener('DOMContentLoaded', function () {
    const animationTargets = document.querySelectorAll('.animation-target');
    animationTargets.forEach(target => {
        target.classList.add('animate-in');
    });
});
