document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideHeight = slides[0].offsetHeight;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex++;
    if (currentIndex === slides.length) {
      currentIndex = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateY(-${slideHeight * currentIndex}px)`;
  }

  setInterval(nextSlide, 3000); // Час, через який буде здійснюватися прокрутка (3000 мілісекунд = 3 секунди)
});
