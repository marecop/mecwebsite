document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        scrollItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;

            if (itemTop < windowHeight - 100) {
                // 当滚动到元素进入视口时，淡入效果
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else if (itemBottom < 0) {
                // 当元素完全离开视口上方时，淡出效果
                item.style.opacity = '0';
                item.style.transform = 'translateY(-50px)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 触发初始状态检查
});
