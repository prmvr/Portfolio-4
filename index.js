const slides = document.querySelectorAll('.project');
const slideDisplay = document.querySelector('#amount');
const repos = document.querySelector('#repos');
const following = document.querySelector('#following');
let curSlide = 0;
const totalSlides = slides.length;
document.getElementById('left-slider-btn').addEventListener('click', function (e) {
    moveSlideBack();
});
document.getElementById('right-slider-btn').addEventListener('click', function (e) {
    moveSlideForward();
});


async function updateText() {
    try {
        const resData = await fetch("https://api.github.com/users/prmvr").then(res => {
            return res.json()
        });
        repos.innerHTML = `${resData.public_repos}+`;
        following.innerHTML = `${resData.following}+`;
    } catch (err) {
        repos.innerHTML = `15+`;
        following.innerHTML = `20+`;
        console.log(err);
    }
}

function moveSlideBack() {
    if (curSlide === 0) {
        curSlide = 0;
    } else curSlide--;
    return updateSlides();
}

function moveSlideForward() {
    if (curSlide === totalSlides - 1) {
        curSlide = 0;
    } else curSlide++;
    return updateSlides();
}

function updateSlides() {
    for (let slide of slides) {
        slide.classList.remove('is-active');
    }
    slides[curSlide].classList.add('is-active');
    slideDisplay.innerHTML = `( ${curSlide + 1} / ${totalSlides} )`;
}

function cons() {
    console.log("hello");
}
updateSlides();
updateText();