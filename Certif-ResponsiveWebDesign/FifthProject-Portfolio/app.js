// parallax effects
let parallax = document.querySelectorAll(".parallax");
let parallaxL = document.querySelectorAll(".parallaxL");
let parallaxR = document.querySelectorAll(".parallaxR");
let parallaxB = document.querySelectorAll(".parallaxB");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

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
});

// projects solar-system effects

// slider management
// get data from data.json
async function getData() {
    const json = "./data.json";
    try {
        const response = await fetch(json);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // create slider project content for each project
        for (const project of data.projects) {
            const projectContent = document.createElement("div");
            projectContent.classList.add("slider-project");

            const projectViewport = document.createElement("iframe");
            projectViewport.src = project.source;

            const projectDiv = document.createElement("div");

            let projectTool = document.createElement("span");
            projectTool.classList.add("tool");
            for (const tool of project.tools) {
                projectTool.innerText = tool;
            }

            projectDiv.innerHTML = `<p><span>Name: </span>${project.name}</p>
            <p><span>Description: </span>${project.description}</p>
            <p><span>Languages & Techno: </span>${projectTool}</p>
            <p><span>GitHub: </span>${project.github}</p>`;

            projectContent.appendChild(projectViewport);
            projectContent.appendChild(projectDiv);

            document.getElementById("slider-content").appendChild(projectContent);
        }

    } catch (error) {
        console.error(error.message);
    }
}
getData();

let slider = document.getElementById("projects-slider");
let planets = document.querySelectorAll(".planet");

planets.forEach((planet) => {
    planet.addEventListener("click", () => {
        slider.classList.remove("hide");
    });
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