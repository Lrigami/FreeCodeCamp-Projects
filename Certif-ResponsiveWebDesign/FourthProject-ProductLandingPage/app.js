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

// locations (modifiable array)
let locations = [
    {
        name: "Tokyo",
        prefecture: "Tokyo", 
        x: 356,
        y: 1397
    }, 
    {
        name: "Takao Mount", 
        prefecture: "Tokyo",
        x: 356,
        y: 1392
    }, 
    {
        name: "Oze National Park",
        prefecture: "Tochigi",
        x: 369,
        y: 1392
    },
    {
        name: "Takayama",
        prefecture: "Gifu",
        x: 361,
        y: 1372
    },
    {
        name: "Kurobe River",
        prefecture: "Toyama",
        x: 355,
        y: 1376
    },
    {
        name: "Shirakawa-Gô",
        prefecture: "Gifu",
        x: 362,
        y: 1368
    },
    {
        name: "Nara",
        prefecture: "Nara",
        x: 346,
        y: 1357
    },
    {
        name: "Yoshino-yama",
        prefecture: "Nara",
        x: 341,
        y: 1359
    },
    {
        name: "Osaka",
        prefecture: "Osaka",
        x: 346,
        y: 1354
    },
    {
        name: "Kyôto",
        prefecture: "Kyôto",
        x: 349,
        y: 1357
    },
    {
        name: "Tottori",
        prefecture: "Tottori",
        x: 355,
        y: 1342
    },
    {
        name: "Kinosaki-onsen",
        prefecture: "Hyôgo",
        x: 356,
        y: 1348
    },
    {
        name: "Hiroshima",
        prefecture: "Hiroshima",
        x: 343,
        y: 1324
    },
    {
        name: "Onna",
        prefecture: "Okinawa",
        x: 264,
        y: 1278
    },
    {
        name: "Nagano",
        prefecture: "Nagano",
        x: 366,
        y: 1381
    }
];

// sort locations array by alphabetical order
const locationsFilter = locations.sort((a, b) => a.name.localeCompare(b.name));

// create an option for each location of the sorted array and a button for the map
const select = document.getElementById("select-location");
const map = document.getElementById("mapgrid");
locationsFilter.forEach((location) => {
    let option = document.createElement("option");
    option.value = `${location.name}`;
    option.innerHTML = `${location.name}`;

    let mapButton = document.createElement("button");
    mapButton.classList.add("map-location", `${location.name.replace(/\s+/g, '-')}`);
    let mapIcon = document.createElement("span");
    mapIcon.classList.add("material-icons");
    mapIcon.innerHTML = "location_on";

    let buttonX = location.x;
    let buttonY = location.y;

    mapButton.style.gridColumnStart = (237 - buttonX)*(-1);
    mapButton.style.gridColumnEnd = ((237 - buttonX)*(-1)) + 1;
    mapButton.style.gridRowStart = 1256 - buttonY + 220;
    mapButton.style.gridRowEnd = 1256 - buttonY + 220 + 1;

    mapButton.style.zIndex = "6";
    select.appendChild(option);
    mapButton.appendChild(mapIcon);
    map.appendChild(mapButton);
})

