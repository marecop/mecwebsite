document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        scrollItems.forEach(item => {
            const rect = item.getBoundingClientRect(); // 获取元素位置
            const itemMiddle = rect.top + rect.height / 2; // 元素的中间位置

            // 根据元素与视口中间位置的距离计算透明度
            const distanceFromCenter = Math.abs(windowHeight / 2 - itemMiddle);
            const maxDistance = windowHeight / 2;
            const opacity = 1 - Math.min(distanceFromCenter / maxDistance, 1);

            item.style.opacity = opacity;
        });
    };

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 页面加载时检查
});
