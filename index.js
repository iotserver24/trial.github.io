document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive button layout for the download section
    const buttons = document.querySelectorAll('.download .btn');
    const updateButtonLayout = () => {
        if (window.innerWidth <= 768) {
            buttons.forEach(button => {
                button.classList.remove('mx-2');
                button.classList.add('my-2');
            });
        } else {
            buttons.forEach(button => {
                button.classList.remove('my-2');
                button.classList.add('mx-2');
            });
        }
    };

    window.addEventListener('resize', updateButtonLayout);
    updateButtonLayout();

    // Open links in new tabs for external links
    document.querySelectorAll('a[href^="http"], a[target="_blank"]').forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
    });
});
