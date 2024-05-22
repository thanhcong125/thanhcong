let slideIndex = 0;
const images = ["./img//bg-1.png", "./img//bg-2.png", "./img//bg-3.png"];
let autoSlideInterval;

function showSlides(index) {
  let header = document.querySelector("header");
  header.style.backgroundImage = `url('${images[index]}')`;
  header.style.backgroundSize = "cover";
}

function currentSlide(index) {
  clearInterval(autoSlideInterval); // Stop the automatic slideshow when user manually changes slide
  slideIndex = index - 1;
  showSlides(slideIndex);
  autoSlideInterval = setInterval(nextSlide, 3000); // Restart the automatic slideshow
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  showSlides(slideIndex);
}

// Initialize the first slide and start the automatic slideshow
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds
});
