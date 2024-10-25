const translate = document.querySelectorAll(".translate");
const shadow = document.querySelectorAll(".shadow");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    shadow.forEach(element => {
        let opacity = element.dataset.opacity;
        element.style.opacity = `${opacity - ((scroll/100)/8)}`;
        console.log(opacity - ((scroll/100)/8));
    })
})