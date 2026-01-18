let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((Li, key) => {
    Li.addEventListener('click', function(){
        active = Key;
        reloadSlider();
    })
})


document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.slider2');
    if (!slider) return;

    const slidesContainer = slider.querySelector('.slides');
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slidesContainer.style.transform =
            `translateX(-${currentSlide * 100}%)`;
    }

    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // inicialização correta
    showSlide(0);
});
