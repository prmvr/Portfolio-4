const slides = document.querySelectorAll('.project');
const slideDisplay = document.querySelector('#amount');
let curSlide = 0;
const totalSlides = slides.length;
document.getElementById('left-slider-btn').addEventListener('click', function (e){
moveSlideBack();
});
document.getElementById('right-slider-btn').addEventListener('click', function(e) {
moveSlideForward();
});
updateSlides();
function moveSlideBack(){
    if(curSlide === 0){
    curSlide = 0;
    } else curSlide--;
    return updateSlides();
}
function moveSlideForward(){
    if(curSlide === totalSlides - 1) {
        curSlide = 0;
    }
    else curSlide++;
    return updateSlides();
}
function updateSlides(){
    for(let slide of slides){
        slide.classList.remove('is-active');
    }
    slides[curSlide].classList.add('is-active');
    slideDisplay.innerHTML = `( ${curSlide + 1} / ${totalSlides} )`;
}
