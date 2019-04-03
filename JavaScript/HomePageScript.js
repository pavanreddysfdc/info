/* Make carousel appear and disapper in gallery page*/

let playslideshowBtn = document.querySelector('#playSlideShow');
let stopSlideshowBtn = document.querySelector('#stopSlideShow');
let carouselimgs = document.querySelector('#gallerycarousel');
let galleryImages = document.querySelector('#gallery-images');
let showAllImages = document.querySelector('#show');

playslideshowBtn.addEventListener('click',playShow);
stopSlideshowBtn.addEventListener('click',stopShow);

function playShow() {
    galleryImages.style.display = "none";
    carouselimgs.style.display = "block";
    playslideshowBtn.style.display = "none";
    stopSlideshowBtn.style.display = "block";
    showAllImages.style.display="none";

}
function stopShow() {
    galleryImages.style.display="block";
    carouselimgs.style.display="none";
    playslideshowBtn.style.display="block";
    stopSlideshowBtn.style.display="none";
    showAllImages.style.display="block";
}