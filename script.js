document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');

    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Optional: for animating the toggle icon
        });
    }
});