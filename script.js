let slideIndex = 0;
const images = ["./img//bg-1.png", "./img//bg-2.png", "./img//bg-3.png"];
let autoSlideInterval;

function showSlides(index) {
  let header = document.querySelector("header");
  header.style.backgroundImage = `url('${images[index]}')`;
  header.style.backgroundSize = "cover";
}

function currentSlide(index) {
  clearInterval(autoSlideInterval);
  slideIndex = index - 1;
  showSlides(slideIndex);
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  showSlides(slideIndex);
}

function initSlider(
  sliderSelector,
  slideClass,
  prevButtonSelector,
  nextButtonSelector,
  slidesToShow = 3
) {
  const slider = document.querySelector(sliderSelector);
  const slides = document.querySelectorAll(slideClass);
  const prevButton = document.getElementById(prevButtonSelector);
  const nextButton = document.getElementById(nextButtonSelector);

  let currentIndex = 0;
  const totalSlides = slides.length;

  const updateSlider = () => {
    const offset = -currentIndex * (100 / slidesToShow);
    slider.style.transform = `translateX(${offset}%)`;
  };

  const nextSlideAuto = () => {
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  };

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - slidesToShow;
    }
    updateSlider();
    resetAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
    resetAutoSlide();
  });

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlideAuto, 3000);
  };

  updateSlider();
  autoSlideInterval = setInterval(nextSlideAuto, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlideInterval = setInterval(nextSlide, 3000);

  initSlider(".slider", ".slide", "prev", "next");
  initSlider(".slider-2", ".slide-2", "prev-2", "next-2");
  initSlider(".slider-3", ".slide-3", "prev-3", "next-3");
  initSlider(".slider-4", ".slide-4", "prev-4", "next-4");
  initSlider(".slider-5", ".slide-5", "prev-5", "next-5");
  initSlider(".slider-6", ".slide-6", "prev-6", "next-6");
});
