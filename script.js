const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector(".lightbox-close");

document.querySelectorAll("article img").forEach((image) => {
image.addEventListener("click", () => {
lightboxImage.src = image.src;
lightboxImage.alt = image.alt;
lightbox.classList.add("open");
document.body.style.overflow = "hidden";
closeButton.focus();
});
});

function closeLightbox() {
lightbox.classList.remove("open");
document.body.style.overflow = "";
lightboxImage.src = "";
}

closeButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
if (event.key === "Escape" && lightbox.classList.contains("open")) {
closeLightbox();
}
});
