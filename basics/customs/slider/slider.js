const slides = document.querySelectorAll('.slideItem');
let currentSLide = 0;


// slider Update
function sliderUpdate(index) {
  // remove Active class from current slideItem
  slides.forEach(slide => slide.classList.remove('active'));

  // add Active class on current slide item
  slides[index].classList.add('active');
}

// nextSlide
function nextSlide() {
  currentSLide = (currentSLide + 1) % slides.length;
  sliderUpdate(currentSLide);
}
// prevSlide
function prevSlide() {
  currentSLide = (currentSLide - 1 + slides.length) % slides.length;
  sliderUpdate(currentSLide);
}

document.querySelector('.slide-next').addEventListener('click', nextSlide);
document.querySelector('.slide-prev').addEventListener('click', prevSlide);


