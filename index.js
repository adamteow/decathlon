// Auto slider
let index = 0;
displayImages();

function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages, 10000);
}

// Manual slider
let slideIndex = 1;
showSlides(index);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}