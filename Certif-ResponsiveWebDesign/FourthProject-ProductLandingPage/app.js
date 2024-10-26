const translate = document.querySelectorAll(".translate");
const translateInverted = document.querySelectorAll(".translateInverted");
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
        places: [
            {
                name: "Shinjuku Gyôen",
                image: "./images/Shinjuku-Gyoen.jpg"
            }, 
            {
                name: "Tokyo", 
                image: "./images/Tokyo.jpg"
            }, 
            {
                name: "Fuji-san", 
                image: "./images/Fuji-san.jpg"
            }, 
        ]
    }, 
    {
        name: "Takao Mount", 
        prefecture: "Tokyo", 
        places: [
            {
                name: "Takao Mount", 
                image: "./images/Takao-mount.jpg"
            }
        ]
    }, 
    {
        name: "Oze National Park",
        prefecture: "Tochigi", 
        places: [
            {
                name: "Oze park", 
                image: "./images/Oze-park.jpg"
            }, 
            {
                name: "Hiuchigatake mount", 
                image: "./images/Oze-park-3.jpg"
            }, 
            {
                name: "Sanjo falls", 
                image: "./images/Oze-park-waterfall.jpg"
            }, 
            {
                name: "Oze park - Miike", 
                image: "./images/Oze-park-dragonfly.jpg"
            }
        ]
    },
    {
        name: "Takayama",
        prefecture: "Gifu",
        places: [
            {
                name: "Hida no sato - folkloric village", 
                image: "./images/Hida-no-sato-village.jpg"
            }, 
            {
                name: "Hida kokubun-ji", 
                image: "./images/Hida-Kokubun-ji.jpg"
            },
            {
                name: "Sakurayama Hachimangu Shrine",
                image: "./images/Sakurayama-Hachimangu-Shrine.jpg"
            }
        ]
    },
    {
        name: "Kurobe River",
        prefecture: "Toyama", 
        places: [
            {
                name: "Kurobe river", 
                image: "./images/Kurobe.jpg"
            }, 
            {
                name: "Kurobe railway", 
                image: "./images/Kurobe-railway.jpg"
            }
        ]
    },
    {
        name: "Shirakawa-Gô",
        prefecture: "Gifu", 
        places: [
            {
                name: "Shirakawa-Gô historic village", 
                image: "./images/Shirakawa-Go-Village.jpg"
            }, 
            {
                name: "Shirakawa-Gô houses", 
                image: "./images/Go-Shirakawa-house.jpg"
            }, 
            {
                name: "Shirakawa-Gô waterfall", 
                image: "./images/Shirakawa-Go-waterfall.jpg"
            }
        ]
    },
    {
        name: "Nara",
        prefecture: "Nara", 
        places: [
            {
                name: "Kasuga Grand Shrine", 
                image: "./images/Kasuga-Taisha.jpg"
            }, 
            {
                name: "Nara deers", 
                image: "./images/Nara-deer.jpg"
            }, 
            {
                name: "Nara deers", 
                image: "./images/Nara-deer-3.jpg"
            }
        ]
    },
    {
        name: "Yoshino-yama",
        prefecture: "Nara", 
        places: [
            {
                name: "Yoshino yama", 
                image: "./images/Yoshino-yama.jpg"
            }, 
        ]
    },
    {
        name: "Osaka",
        prefecture: "Osaka", 
        places: [
            {
                name: "Osaka Light festival", 
                video: "./images/video/Osaka-light-festival.mp4",
                text: "Short film of Osaka light festival"
            }, 
        ]
    },
    {
        name: "Kyôto",
        prefecture: "Kyôto", 
        places: [
            {
                name: "Tôji Pagoda (by night)", 
                image: "./images/Tôji.jpg"
            }, 
            {
                name: "Gion matsuri", 
                image: "./images/Gion-matsuri.jpg"
            }, 
            {
                name: "Fushimi Inari", 
                image: "./images/Fushimi-Inari.jpg"
            }, 
            {
                name: "Heian Jingu", 
                image: "./images/Heian-Jingu-2.jpg"
            }, 
            {
                name: "Kinkaku-ji", 
                image: "./images/Pavillon-dor.jpg"
            }, 
            {
                name: "Nijô castle", 
                image: "./images/Nijô.jpg"
            }, 
        ]
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

    mapButton.style.zIndex = "3";
    select.appendChild(option);
    mapButton.appendChild(mapIcon);
    map.appendChild(mapButton);

    let divIndicate = document.createElement("div");
    divIndicate.style.zIndex = "4";
    divIndicate.innerHTML = `${location.name}`;
    mapButton.appendChild(divIndicate);

    // display places cards when we click on a map button
    mapButton.addEventListener("click", () => {
        let cardSection = document.getElementById("automatised-locations");
        if (cardSection.children.length > 0) {
            cardSection.innerHTML = "";
        }

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title-div");

        let locationName = document.createElement("h3");
        locationName.innerHTML = location.name;
        let locationPrefecture = document.createElement("h4");
        locationPrefecture.innerHTML = location.prefecture;

        titleDiv.appendChild(locationName);
        titleDiv.appendChild(locationPrefecture);
        cardSection.appendChild(titleDiv);

        location.places.forEach((place) => {
            let card = document.createElement("div");
            card.classList.add("place-card");

            let textAndButton = document.createElement("div");
            textAndButton.classList.add("blur");

            let placeName = document.createElement("h5");
            placeName.innerHTML = place.name;
            if (place.image) {
                card.style.backgroundImage = `url(${place.image})`;
            } else if (place.video) {
                let placeVideo = document.createElement("video");
                placeVideo.setAttribute("muted", "");
                placeVideo.setAttribute("autoplay", "");
                placeVideo.setAttribute("loop", "");
                placeVideo.innerHTML = `${place.text}`;

                let videoSrc = document.createElement("source");
                videoSrc.setAttribute("src", place.video);
                videoSrc.setAttribute("type", "video/mp4");

                placeVideo.appendChild(videoSrc);
                card.appendChild(placeVideo);
            }
            let bookNow = document.createElement("button");
            bookNow.innerHTML = "Book now";

            textAndButton.appendChild(placeName);
            textAndButton.appendChild(bookNow);

            card.appendChild(textAndButton);

            cardSection.appendChild(card);
        })

        const evenCard = document.querySelectorAll("#automatised-locations > div:nth-child(even)");
        const oddCard = document.querySelectorAll("#automatised-locations > div:nth-child(odd)");

        evenCard.forEach((child) => {
            child.classList.add("translate");
            child.setAttribute("data-speed", "0.05");
        })

        oddCard.forEach((child) => {
            child.classList.add("translateInverted");
            child.setAttribute("data-speed", "0.05");
        })

        let firstChild = document.querySelector(".title-div");
        firstChild.classList.remove("translateInverted");
    })
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    const translate = document.querySelectorAll(".translate");
    const translateInverted = document.querySelectorAll(".translateInverted");
    
    // parallax effect
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    translateInverted.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(-${scroll * speed}px)`;
    })
})
