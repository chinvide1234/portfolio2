const galleryImages = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        document.getElementById("lightbox-title").textContent = img.dataset.title;
        document.getElementById("lightbox-info").textContent = img.dataset.year + " ・ " + img.dataset.size;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }
});