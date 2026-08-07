document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery .grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxInfo = document.getElementById('lightbox-info');
    const lightboxBuyBtn = document.getElementById('lightbox-buy-btn');
    const lightboxSoldBadge = document.getElementById('lightbox-sold-badge');
    const closeBtn = document.querySelector('.lightbox .close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const title = img.getAttribute('data-title') || '';
            const year = img.getAttribute('data-year') || '';
            const size = img.getAttribute('data-size') || '';
            const baseUrl = img.getAttribute('data-base-url');
            const isSold = img.getAttribute('data-sold') === 'true';

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxTitle.textContent = title;
            lightboxInfo.textContent = `${year} / ${size}`;

            if (isSold) {
                // 売切作品：SOLD OUT表示、購入ボタンは非表示
                lightboxSoldBadge.style.display = 'inline-block';
                lightboxBuyBtn.style.display = 'none';
            } else if (baseUrl && baseUrl.trim() !== '') {
                // 販売中作品：SOLD OUT非表示、購入ボタンを表示
                lightboxSoldBadge.style.display = 'none';
                lightboxBuyBtn.href = baseUrl;
                lightboxBuyBtn.style.display = 'inline-block';
            } else {
                // 非売品等：どちらも非表示
                lightboxSoldBadge.style.display = 'none';
                lightboxBuyBtn.style.display = 'none';
            }

            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
