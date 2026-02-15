const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

function showSlide(i) {
  index = (i + slideCount) % slideCount;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => showSlide(index + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));

// Autoplay cada 3 segundos
setInterval(() => showSlide(index + 1), 3000);