document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery .grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxInfo = document.getElementById('lightbox-info');
    const lightboxBuyBtn = document.getElementById('lightbox-buy-btn');
    const lightboxSoldBadge = document.getElementById('lightbox-sold-badge');
    const closeBtn = document.querySelector('.lightbox .close');

    if (!lightbox || !lightboxImg) return;

    images.forEach(img => {
        img.addEventListener('click', () => {
            const title = img.getAttribute('data-title') || '';
            const year = img.getAttribute('data-year') || '';
            const size = img.getAttribute('data-size') || '';
            const baseUrl = img.getAttribute('data-base-url');
            const isSold = img.getAttribute('data-sold') === 'true';

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            if (lightboxTitle) lightboxTitle.textContent = title;
            if (lightboxInfo) lightboxInfo.textContent = `${year} / ${size}`;

            // SOLD OUTバッジの制御
            if (lightboxSoldBadge) {
                lightboxSoldBadge.style.display = isSold ? 'inline-block' : 'none';
            }

            // 購入ボタンの制御
            if (lightboxBuyBtn) {
                if (!isSold && baseUrl && baseUrl.trim() !== '') {
                    lightboxBuyBtn.href = baseUrl;
                    lightboxBuyBtn.style.display = 'inline-block';
                } else {
                    lightboxBuyBtn.style.display = 'none';
                }
            }

            // CSSの表示アニメーション用クラスを追加
            lightbox.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});
