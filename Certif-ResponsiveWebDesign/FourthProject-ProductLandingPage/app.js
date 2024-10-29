const translate = document.querySelectorAll(".translate");
const translateInverted = document.querySelectorAll(".translateInverted");
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
                image: "./images/Shinjuku-Gyoen.jpg",
                text: "Photo of a pavillion in Shinjuku park in Tokyo."
            }, 
            {
                name: "Tokyo", 
                image: "./images/Tokyo.jpg", 
                text: "Photo of Tokyo buildings from a water lilies pond."
            }, 
            {
                name: "Fuji-san", 
                image: "./images/Fuji-san.jpg", 
                text: "Photo of the Fuji-san from train."
            }, 
            {
                name: "Tokyo National Museum", 
                image: "./images/Tokyo-museum.jpg", 
                text: "Photo of the Tokyo National Museum in Ueno park."
            }
        ]
    }, 
    {
        name: "Takao Mount", 
        prefecture: "Tokyo", 
        places: [
            {
                name: "Takao Mount", 
                image: "./images/Takao-mount.jpg", 
                text: "Photo of mountains from Takao Mount summit."
            }, 
            {
                name: "Takao Mount sculpture", 
                image: "./images/Takao-sculpture.jpg", 
                text: "Photo of a octopus scultpure on Takao Mount trail."
            } 
        ]
    }, 
    {
        name: "Oze National Park",
        prefecture: "Tochigi", 
        places: [
            {
                name: "Oze park", 
                image: "./images/Oze-park.jpg", 
                text: "Photo of Oze national park."
            }, 
            {
                name: "Hiuchigatake mount", 
                image: "./images/Oze-park-3.jpg", 
                text: "Photo of Hiuchigatake mount in Oze national park."
            }, 
            {
                name: "Sanjo falls", 
                image: "./images/Oze-park-waterfall.jpg", 
                text: "Photo of Sanjo falls in Oze national park."
            }, 
            {
                name: "Oze park - Miike", 
                image: "./images/Oze-park-dragonfly.jpg", 
                text: "Photo of a dragonfly in Oze national park."
            }, 
            {
                name: "Hiuchigatake summit", 
                image: "./images/Oze-summit.jpg", 
                text: "Photo of a woman on Hiuchigatake summit in Oze national park."
            }, 
            {
                name: "Hiuchigatake summit", 
                video: "./images/video/Oze-summit.mp4",
                text: "Panorama from Hiuchigatake summit."
            }
        ]
    },
    {
        name: "Takayama",
        prefecture: "Gifu",
        places: [
            {
                name: "Hida no sato - folkloric village", 
                image: "./images/Hida-no-sato-village.jpg", 
                text: "Photo of Hida no sato, a folkloric village near Takayama."
            }, 
            {
                name: "Hida kokubun-ji", 
                image: "./images/Hida-Kokubun-ji.jpg", 
                text: "Photo of the pagoda in Hida Kokubun temple"
            },
            {
                name: "Sakurayama Hachimangu Shrine",
                image: "./images/Sakurayama-Hachimangu-Shrine.jpg", 
                text: "Photo of the great Torii of Sakurayama Hachimangu sanctuary."
            }, 
            {
                name: "Hida no sato - folkloric village", 
                image: "./images/Takayama.jpg", 
                text: "Photo of Hida no sato, a folkloric village near Takayama."
            }
        ]
    },
    {
        name: "Kurobe River",
        prefecture: "Toyama", 
        places: [
            {
                name: "Kurobe river", 
                image: "./images/Kurobe.jpg", 
                text: "Photo of Kurobe river."
            }, 
            {
                name: "Kurobe railway", 
                image: "./images/Kurobe-railway.jpg", 
                text: "Photo of the train on Kurobe river railway."
            }
        ]
    },
    {
        name: "Shirakawa-Gô",
        prefecture: "Gifu", 
        places: [
            {
                name: "Shirakawa-Gô historic village", 
                image: "./images/Shirakawa-Go-Village.jpg",
                text: "Photo of the historic village of Shirakawa-Gô."
            }, 
            {
                name: "Shirakawa-Gô houses", 
                image: "./images/Go-Shirakawa-house.jpg", 
                text: "Photo of two houses in the historic village of Shirakawa-Gô."
            }, 
            {
                name: "Shirakawa-Gô waterfall", 
                image: "./images/Shirakawa-Go-waterfall.jpg", 
                text: "Photo of a house and a waterfall in the historic village of Shirakawa-Gô."
            }
        ]
    },
    {
        name: "Nara",
        prefecture: "Nara", 
        places: [
            {
                name: "Kasuga Grand Shrine", 
                image: "./images/Kasuga-Taisha.jpg", 
                text: "Photo of the Kasuga Grand Shrine."
            }, 
            {
                name: "Nara deers", 
                image: "./images/Nara-deer.jpg", 
                text: "Photo of a deer in Nara."
            }, 
            {
                name: "Nara deers", 
                image: "./images/Nara-deer-3.jpg", 
                text: "Photo of a deer near a tree in Nara."
            }
        ]
    },
    {
        name: "Yoshino-yama",
        prefecture: "Nara", 
        places: [
            {
                name: "Yoshino yama", 
                image: "./images/Yoshino-yama.jpg", 
                text: "Photo in two houses among sakura trees in Yoshino yama."
            }
        ]
    },
    {
        name: "Osaka",
        prefecture: "Osaka", 
        places: [
            {
                name: "Osaka Light festival", 
                video: "./images/video/Osaka-light-festival.mp4",
                text: "Short film of Osaka light festival."
            } 
        ]
    },
    {
        name: "Kyôto",
        prefecture: "Kyôto", 
        places: [
            {
                name: "Tôji Pagoda (by night)", 
                image: "./images/Tôji.jpg", 
                text: "Photo of the Tôji Pagoda by night in Kyôto."
            }, 
            {
                name: "Gion matsuri", 
                image: "./images/Gion-matsuri.jpg", 
                text: "Photo of a woman participating in Gion matsuri, Kyôto."
            }, 
            {
                name: "Fushimi Inari", 
                image: "./images/Fushimi-Inari.jpg", 
                text: "Photo of the Fushimi Inari in Kyôto."
            }, 
            {
                name: "Heian Jingu", 
                image: "./images/Heian-Jingu-2.jpg", 
                text: "Photo of a pavillion in Heian Jingu gardens."
            }, 
            {
                name: "Kinkaku-ji", 
                image: "./images/Kinkaku-ji.jpg", 
                text: "Photo of the Kinkaku-ji on a sunny day."
            }, 
            {
                name: "Nijô castle", 
                image: "./images/Nijô.jpg", 
                text: "Photo of the Nijô castle."
            }, 
            {
                name: "Kyôto light festival", 
                image: "./images/Kyoto-light-festival.jpg", 
                text: "Photo of Kamigamo-jinja during the Kyôto light festival."
            }, 
            {
                name: "Kyôto tower", 
                image: "./images/Kyoto-tower.jpg", 
                text: "Photo of the Kyôto tower by night."
            }, 
            {
                name: "Tea ceremony", 
                image: "./images/Tea-ceremony.jpg", 
                text: "Photo of a tea ceremony with sweets."
            }
        ]
    },
    {
        name: "Tottori",
        prefecture: "Tottori", 
        places: [
            {
                name: "Tottori Dunes", 
                image: "./images/Tottori-dunes.jpg", 
                text: "Photo of Tottori dunes."
            }, 
            {
                name: "Tottori Bus", 
                image: "./images/Tottori-bus.jpg", 
                text: "Photo of a Pokemon themed Tottori bus."
            }, 
            {
                name: "Tottori Sand museum", 
                image: "./images/Tottori-sand-museum.jpg", 
                text: "Photo of a giant teddy bear in sand in the Tottori Sand museum."
            } 
        ] 
    },
    {
        name: "Kinosaki-onsen",
        prefecture: "Hyôgo", 
        places: [
            {
                name: "Kinosaki onsen", 
                image: "./images/Kinosaki-onsen.jpg", 
                text: "Photo of Kinosaki onsen river."
            } 
        ]
    },
    {
        name: "Hiroshima",
        prefecture: "Hiroshima", 
        places: [
            {
                name: "Hiroshima shrine", 
                image: "./images/Hiroshima.jpg", 
                text: "Photo of a mountain landscape below a Shinto temple rope."
            }, 
            {
                name: "Hiroshima castle mascot", 
                image: "./images/Hiroshima-castle.jpg", 
                text: "Photo of the Hiroshima catsle mascot."
            }, 
            {
                name: "Hiroshima castle", 
                image: "./images/Hiroshima-castle-2.jpg", 
                text: "Photo of the castle of Hiroshima."
            }
        ]
    },
    {
        name: "Onna",
        prefecture: "Okinawa", 
        places: [
            {
                name: "Cape Manzamo", 
                image: "./images/Okinawa.jpg", 
                text: "Photo of Cape Manzamo in Okinawa."
            }, 
            {
                name: "Okinawa beach", 
                image: "./images/Okinawa-beach.jpg", 
                text: "Photo of a beach in Okinawa."
            }, 
            {
                name: "Snorkeling & fish feeding", 
                video: "./images/video/Okinawa-fish.mp4",
                text: "Short film of someone feeding fishes in Okinawa sea."
            }
        ]
    },
    {
        name: "Nagano",
        prefecture: "Nagano", 
        places: [
            {
                name: "Nagano station", 
                image: "./images/Nagano-eki.jpg", 
                text: "Photo of the Nagano station by night."
            }, 
        ]
    }
];

// sort locations array by alphabetical order
const locationsFilter = locations.sort((a, b) => a.name.localeCompare(b.name));

// create an option for each location of the sorted array and a button for the map
const select = document.getElementById("select-location");
const map = document.getElementById("mapgrid");
locationsFilter.forEach((location) => {
    location.places.sort((a, b) => a.name.localeCompare(b.name));

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

        cardSection.style.paddingTop = "7%";
        cardSection.style.paddingBottom = "5%";

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title-div");
        titleDiv.setAttribute("id", "titleDiv");

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
                const img = new Image();
                img.src = `${place.image}`;
                img.onload = () => {
                    card.style.backgroundImage = `url(${place.image})`;
                };
                img.onerror = () => {
                    let textAlt = document.createElement("p");
                    textAlt.innerHTML = `${place.text}`;
                    textAlt.style.textAlign = "center";
                    textAlt.style.color = "black";
                    textAlt.style.margin = "auto";
                    card.prepend(textAlt);
                };
            } else if (place.video) {
                const vid = new Image();
                vid.src = `${place.video}`;
                vid.onload = () => {
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
                };
                vid.onerror = () => {
                    let textAlt = document.createElement("p");
                    textAlt.innerHTML = `${place.text}`;
                    textAlt.style.textAlign = "center";
                    textAlt.style.color = "black";
                    textAlt.style.margin = "auto";
                    card.prepend(textAlt);
                }
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
            child.classList.add("card-translate");
            child.setAttribute("data-speed", "0.01");
        })

        oddCard.forEach((child) => {
            child.classList.add("card-translateInverted");
            child.setAttribute("data-speed", "0.01");
        })

        let firstChild = document.querySelector(".title-div");
        firstChild.classList.remove("card-translateInverted");

        window.location.href = "#automatised-locations";

        let buttonUp = document.createElement("button");
        buttonUp.innerHTML = "Go back to map";
        buttonUp.setAttribute("id", "go-back-button"); 
        cardSection.appendChild(buttonUp);
        buttonUp.onclick = () => {
            window.location.href = "#locations";
        }
    })

    option.addEventListener("click", () => {
        let cardSection = document.getElementById("automatised-locations");
        if (cardSection.children.length > 0) {
            cardSection.innerHTML = "";
        }

        cardSection.style.paddingTop = "7%";
        cardSection.style.paddingBottom = "5%";

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title-div");
        titleDiv.setAttribute("id", "titleDiv");

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
                const img = new Image();
                img.src = `${place.image}`;
                img.onload = () => {
                    card.style.backgroundImage = `url(${place.image})`;
                };
                img.onerror = () => {
                    let textAlt = document.createElement("p");
                    textAlt.innerHTML = `${place.text}`;
                    textAlt.style.textAlign = "center";
                    textAlt.style.color = "black";
                    textAlt.style.margin = "auto";
                    card.prepend(textAlt);
                };
            } else if (place.video) {
                const vid = new Image();
                vid.src = `${place.video}`;
                vid.onload = () => {
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
                };
                vid.onerror = () => {
                    let textAlt = document.createElement("p");
                    textAlt.innerHTML = `${place.text}`;
                    textAlt.style.textAlign = "center";
                    textAlt.style.color = "black";
                    textAlt.style.margin = "auto";
                    card.prepend(textAlt);
                }
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
            child.classList.add("card-translate");
            child.setAttribute("data-speed", "0.01");
        })

        oddCard.forEach((child) => {
            child.classList.add("card-translateInverted");
            child.setAttribute("data-speed", "0.01");
        })

        let firstChild = document.querySelector(".title-div");
        firstChild.classList.remove("card-translateInverted");

        window.location.href = "#automatised-locations";

        let buttonUp = document.createElement("button");
        buttonUp.innerHTML = "Go back to map";
        buttonUp.setAttribute("id", "go-back-button"); 
        cardSection.appendChild(buttonUp);
        buttonUp.onclick = () => {
            window.location.href = "#locations";
        }
    })
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    const cardTranslate = document.querySelectorAll(".card-translate");
    const cardTranslateInverted = document.querySelectorAll(".card-translateInverted");
    
    // parallax effect
    cardTranslate.forEach(element => {
        let speed = element.dataset.speed;
        let translateValue = scroll * speed;
        element.style.transform = `translateY(${translateValue}vh)`;
        element.style.top = `-${translateValue}vh`;
    })

    cardTranslateInverted.forEach(element => {
        let speed = element.dataset.speed;
        let translateValue = scroll * speed;
        element.style.transform = `translateY(-${translateValue}vh)`;
        element.style.top = `${translateValue}vh`;
    })
})

//review (modifiable array)
let reviews = [
    {
        username: "Dean_Flavor2",
        userpic: "./images/users/user1.jpg",
        title: "Unforgettable Journey into Japan's Heart",
        reviewContent: "Thank you, Nihon Nomad, for an amazing experience! The itineraries were perfectly crafted, letting me discover magical, off-the-beaten-path spots. The day at Hakone’s onsen was pure bliss! Ideal for travelers looking for true authenticity and immersion.",
        notation: 5
    }, 
    {
        username: "WanderlustJoe",
        userpic: "./images/users/user2.jpg",
        title: "A Zen and Authentic Journey",
        reviewContent: "My trip with Nihon Nomad was unforgettable! Their Kyoto recommendations were spot-on, leading me to serene temples and gardens away from the crowds. Every stop felt meaningful, and I felt like I really got to know Japan.",
        notation: 5
    }, 
    {
        username: "MountainHiker86",
        userpic: "./images/users/user3.jpg",
        title: "Incredible Hiking Experiences",
        reviewContent: "The hiking trails suggested by Nihon Nomad were spectacular! I especially loved the trek up Mount Takao. It was the perfect mix of nature and culture, and the views were breathtaking. Ideal for those seeking outdoor adventures in Japan!",
        notation: 5
    }, 
    {
        username: "TokyoDreamer",
        userpic: "./images/users/user4.jpg",
        title: "Perfect Tokyo Itinerary!",
        reviewContent: "Nihon Nomad's Tokyo itinerary was fantastic. I discovered both the bustling streets of Shibuya and quiet tea houses in Asakusa. The balance of activities was perfect, and I felt like I truly experienced Tokyo's unique spirit!",
        notation: 4
    }, 
    {
        username: "NatureSeeker",
        userpic: "./images/users/user5.jpg",
        title: "Breathtaking Views and Peaceful Moments",
        reviewContent: "The natural spots recommended by Nihon Nomad were just amazing. I loved the quiet trails around Lake Kawaguchi with Mount Fuji in the background. Perfectly organized for travelers seeking peace and beautiful landscapes in Japan.",
        notation: 5
    }
]

let reviewDiv = document.getElementById("slider-content");

reviews.forEach((review) => { 
    let wholeReview = document.createElement("div");

    let userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    let userPicContainer = document.createElement("div");
    userPicContainer.classList.add("user-pic");
    let userPic = document.createElement("img");
    userPic.src = `${review.userpic}`;
    userPic.setAttribute.alt = `${review.username} profile picture.`
    userPic.classList.add("pic");
    userPicContainer.appendChild(userPic)

    let userName = document.createElement("p");
    userName.innerHTML = `${review.username}`;

    function Rating(rating) {
        let userNote = document.createElement("p");
        for (let i = 0; i < rating; i++) {
            const star = document.createElement("span");
            star.classList.add("material-icons");
            star.classList.add("star");
            star.innerHTML = "star";
            userNote.appendChild(star);
        }

        return userNote;
    }

    userInfo.appendChild(userPicContainer);
    userInfo.appendChild(userName);
    userInfo.appendChild(Rating(review.notation));

    let userMsg = document.createElement("div");
    userMsg.classList.add("review-msg");

    let quote = document.createElement("p");
    quote.classList.add("quote");
    quote.innerHTML = "“";

    let textTitle = document.createElement("h4");
    textTitle.classList.add("review-title");
    textTitle.innerHTML = `${review.title}`;

    let userText = document.createElement("p");
    userText.innerHTML = `${review.reviewContent}`;

    userMsg.appendChild(quote);
    userMsg.appendChild(textTitle);
    userMsg.appendChild(userText);

    wholeReview.appendChild(userInfo);
    wholeReview.appendChild(userMsg);

    reviewDiv.appendChild(wholeReview);
})