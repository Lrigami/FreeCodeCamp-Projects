// parallax effects
let parallax = document.querySelectorAll(".parallax");
let parallaxL = document.querySelectorAll(".parallaxL");
let parallaxR = document.querySelectorAll(".parallaxR");
let parallaxB = document.querySelectorAll(".parallaxB");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    parallaxL.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(-${scroll * speed}px)`;
    })

    parallaxR.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
    })

    parallaxB.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
})

// projects solar-system effects

// slider management
let slider = document.getElementById("projects-slider");
let planet = document.querySelectorAll(".planet");
planet.addEventListener("click", () => {
    slider.classList.remove("hide");
})

// slider navigation buttons
let previousButton = document.getElementById("slider-before");
let nextButton = document.getElementById("slider-after");

previousButton.onclick = () => {
    const sliderWidth = document.getElementById("slider-content").offsetWidth;
    document.getElementById("slider-content").scrollLeft -= sliderWidth;
}

nextButton.onclick = () => {
    const sliderWidth = document.getElementById("slider-content").offsetWidth;
    document.getElementById("slider-content").scrollLeft += sliderWidth;
}