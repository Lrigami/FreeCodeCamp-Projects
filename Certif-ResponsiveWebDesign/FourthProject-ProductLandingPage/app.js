const translate = document.querySelectorAll(".translate");
const translateInverted = document.querySelectorAll(".translateInverted")
const shadow = document.querySelectorAll(".shadow");
const navbar = document.getElementById("nav-bar");
const joinUsButton = document.getElementById("join-us-button");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    
    // parallax effect
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    translateInverted.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(-${scroll * speed}px)`;
        console.log(0 - scroll * speed);
    })

    // Change opacity of scroll-down-circles depending on scrollY
    shadow.forEach(element => {
        let opacity = element.dataset.opacity;
        element.style.opacity = `${opacity - ((scroll/100)/8)}`;
    })

    // Change navbar background opacity depending on scrollY
    let navbarNoopacity = navbar.dataset.noopacity;
    let newNavbarOpacity = `${navbarNoopacity + ((scroll/100)/8)}`;
    let currentNavbarColor = getComputedStyle(navbar).backgroundColor;
    let rgbaNavbarColor = currentNavbarColor.replace(/rgba?\((\d+), (\d+), (\d+),? ?[\d\.]*\)/, `rgba($1, $2, $3, ${newNavbarOpacity})`);
    navbar.style.backgroundColor = rgbaNavbarColor;

    // Change navbar Join Us button border opacity depending on scrollY
    let joinUsButtonOpacity = joinUsButton.dataset.noopacity;
    let newJoinUsButtonOpacity = `${joinUsButtonOpacity + + ((scroll/100)/8)}`;
    let currentJoinUsButtonBorderColor = getComputedStyle(joinUsButton).borderColor;
    let rgbaJoinUsButtonBorderColor = currentJoinUsButtonBorderColor.replace(/rgba?\((\d+), (\d+), (\d+),? ?[\d\.]*\)/, `rgba($1, $2, $3, ${newJoinUsButtonOpacity})`);
    joinUsButton.style.borderColor = rgbaJoinUsButtonBorderColor;
})

const select = document.getElementById("select-option");
const locations = [
    {
        name: "Tokyo",
        prefecture: "Tokyo", 
    }, 
    {
        name: "Takao Mount", 
        prefecture: "Tokyo"
    }, 
    {
        name: "Oze National Park",
        prefecture: "Tochigi"
    },
    {
        name: "Takayama",
        prefecture: "Gifu"
    },
    {
        name: "Kurobe River",
        prefecture: "Toyama"
    },
    {
        name: "Shirakawa-Gô",
        prefecture: "Gifu"
    },
    {
        name: "Nara",
        prefecture: "Nara"
    },
    {
        name: "Yoshino-yama",
        prefecture: "Nara"
    },
    {
        name: "Osaka",
        prefecture: "Osaka"
    },
    {
        name: "Kyôto",
        prefecture: "Kyôto"
    },
    {
        name: "Tottori",
        prefecture: "Tottori"
    },
    {
        name: "Kinosaki-onsen",
        prefecture: "Hyôgo"
    },
    {
        name: "Hiroshima",
        prefecture: "Hiroshima"
    },
    {
        name: "Onna",
        prefecture: "Okinawa"
    },
    {
        name: "Nagano",
        prefecture: "Nagano"
    },
]