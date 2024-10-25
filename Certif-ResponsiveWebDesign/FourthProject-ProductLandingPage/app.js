const translate = document.querySelectorAll(".translate");
const shadow = document.querySelectorAll(".shadow");
const navbar = document.getElementById("nav-bar");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    
    // header img parallax
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    // Change opacity of scroll-down-circles depending on scrollY
    shadow.forEach(element => {
        let opacity = element.dataset.opacity;
        element.style.opacity = `${opacity - ((scroll/100)/8)}`;
    })

    // Change navbar background opacity depending on scrollY
    let noopacity = navbar.dataset.noopacity;
    let newOpacity = `${noopacity + ((scroll/100)/8)}`;
    let currentColor = getComputedStyle(navbar).backgroundColor;
    let rgbaColor = currentColor.replace(/rgba?\((\d+), (\d+), (\d+),? ?[\d\.]*\)/, `rgba($1, $2, $3, ${newOpacity})`);
    navbar.style.backgroundColor = rgbaColor;
})