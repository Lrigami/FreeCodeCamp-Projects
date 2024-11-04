let parallax = document.querySelectorAll(".parallax");
let parallaxL = document.querySelectorAll(".parallaxL");
let parallaxR = document.querySelectorAll(".parallaxR");
let parallaxB = document.querySelectorAll(".parallaxB");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    parallax.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
    })

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