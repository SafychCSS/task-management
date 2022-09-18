document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('[data-theme="toggle"]');
    themeToggle.addEventListener('input', () => {
        document.body.classList.toggle('dark-theme');
    });
});