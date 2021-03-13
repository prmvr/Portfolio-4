const slides = document.getElementsByClassName('project');
let curSlide = 0;
const totalSlides = slides.length;
console.log(totalSlides );
document.getElementById('left-slider-btn').addEventListener('click', function (e){
moveSlidesBack();
});
document.getElementById('right-slider-btn').addEventListener('click', function(e) {
moveSlidesForward();
});
