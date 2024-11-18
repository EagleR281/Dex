
document.querySelectorAll('.social-icon').forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
    });
    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
});
