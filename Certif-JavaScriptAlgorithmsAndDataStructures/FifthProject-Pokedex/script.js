const pkmInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
let pkm = {};

const pkmInfo = document.getElementById("pkm-info")
const pkmName = document.getElementById("pokemon-name");
const pkmId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speAttack = document.getElementById("special-attack");
const speDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

types.style.padding = 0;

const searchPkm = () => {
    let pkmToSearch = pkmInput.value.toLowerCase();

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pkmToSearch}`)
    .then(response => {
        if (!response.ok) {
        alert('Pokémon not found');
        }
        return response.json();
    })
    .then(data => {
        pkm = data;
        console.log('Données chargées :', pkm);
        displayPkm(pkm);
    })
}

const displayPkm = (pkm) => {
    pkmName.textContent = pkm.name.toUpperCase();

    let pkmSprite = document.createElement("img");
    pkmSprite.id = "sprite";
    pkmSprite.setAttribute("src", pkm.sprites.front_default);
    pkmInfo.appendChild(pkmSprite);

    pkmId.textContent = pkm.id;
    weight.textContent = pkm.weight;
    height.textContent = pkm.height;
    for (let i = 0; i < pkm.types.length; i++) {
        let type = document.createElement("li");
        type.textContent += pkm.types[i].type.name;
        types.appendChild(type);
    }
    hp.textContent = pkm.stats[0].base_stat;
    attack.textContent = pkm.stats[1].base_stat;
    defense.textContent = pkm.stats[2].base_stat;
    speAttack.textContent = pkm.stats[3].base_stat;
    speDefense.textContent = pkm.stats[4].base_stat;
    speed.textContent = pkm.stats[5].base_stat;
}

const clearPkm = () => {
    let pkmSprite = document.getElementById("sprite");
    if (pkmSprite) {
        pkmInfo.removeChild(pkmSprite);
    }

    pkmName.textContent = "";
    pkmId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    types.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    speAttack.textContent = "";
    speDefense.textContent = "";
    speed.textContent = "";
}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearPkm();
    searchPkm();
})