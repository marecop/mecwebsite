document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        scrollItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load in case some items are already in view
});
