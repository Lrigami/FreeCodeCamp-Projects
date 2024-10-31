const translate = document.querySelectorAll(".translate");
const translateInverted = document.querySelectorAll(".translateInverted");
const translateHorizontal = document.querySelectorAll(".translate-x");
const shadow = document.querySelectorAll(".shadow");
const navbar = document.getElementById("nav-bar");
const joinUsButton = document.getElementById("join-us-button");

joinUsButton.onclick = () => {
    window.location.href = "#JoinUs";
}

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
    })

    translateHorizontal.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
        element.style.transform += `translateY(${scroll * speed}px)`;
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

// manage Join Us form
let submit = document.getElementById("submit");
submit.onclick = (event) => {
    let name = document.getElementById("form-name").value;
    if (!/^[a-zA-Z]+$/.test(name)) {
        event.preventDefault();
        window.alert("Your name should only contain letters.");
    }
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        event.preventDefault();
        window.alert("Please enter a valid email.");
    }
    let password = document.getElementById("form-password").value;
    let passwordConfirm = document.getElementById("password-confirm").value;
    if (password !== passwordConfirm) {
        event.preventDefault();
        window.alert("Paswwords should match.");
    }
}

// manage newsletter form
let subscribe = document.getElementById("submit-button");
subscribe.onclick = (event) => {
    let email = document.getElementById("email-newsletter").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        event.preventDefault();
        window.alert("Please enter a valid email.");
    }
}