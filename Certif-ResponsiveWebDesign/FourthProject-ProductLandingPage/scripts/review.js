//reviews (modifiable array)
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

// create reviews slider
let reviewDiv = document.getElementById("slider-content");

reviews.forEach((review) => { 
    let wholeReview = document.createElement("div");
    wholeReview.classList.add("review-item");

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
    userName.classList.add("user-name");
    userName.innerHTML = `${review.username}`;

    function Rating(rating) {
        let userNote = document.createElement("p");
        userNote.classList.add("user-note");
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

    let textTitle = document.createElement("h4");
    textTitle.classList.add("review-title");
    textTitle.innerHTML = `${review.title}`;

    let userText = document.createElement("blockquote");
    userText.innerHTML = `${review.reviewContent}`;

    userMsg.appendChild(textTitle);
    userMsg.appendChild(userText);

    let quote = document.createElement("p");
    quote.classList.add("quote");
    quote.innerHTML = "“";

    wholeReview.appendChild(quote);
    wholeReview.appendChild(userInfo);
    wholeReview.appendChild(userMsg);

    reviewDiv.appendChild(wholeReview);
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