document.addEventListener('DOMContentLoaded', function() {
    const leftImage = document.querySelector('.left-image');
    const introText = document.querySelector('.intro-text');

    // 点击图片切换自我介绍
    leftImage.addEventListener('click', function() {
        introText.classList.toggle('active');
    });

    // 点击自我介绍区域隐藏
    introText.addEventListener('click', function() {
        introText.classList.remove('active');
    });

    // 为每个区域添加跳转功能
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', function() {
            const pageMap = {
                'box1': 'pages/thinking-writing.html',
                'box2': 'pages/homework-archive.html',
                'box3': 'pages/aesthetics.html',
                'box4': 'pages/design-works.html',
                'box5': 'pages/image-storage.html',
                'box6': 'pages/under-development.html'
            };
            window.location.href = pageMap[box.id];
        });
    });
});