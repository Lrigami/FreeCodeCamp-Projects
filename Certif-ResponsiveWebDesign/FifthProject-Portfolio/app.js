let parallax = document.querySelectorAll(".parallax");


window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    parallax.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
    })
})