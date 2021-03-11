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

function moveSlidesForward() {
if(curSlide == totalSlides - 1) {
    curSlide = 0;
} else curSlide++;
updateSlides()
}
function moveSlidesBack(){
if(curSlide == 0){
curSlide = 0;
} else curSlide--;
updateSlides();
}

function updateSlides(){
    for(let slide of slides){
    slide.classList.add()
    }
}