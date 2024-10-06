// translate.js

async function translateText(text, targetLang) {
    try {
      const response = await fetch('http://localhost:3000/translate', { // Assurez-vous que le serveur backend tourne
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,        // Le texte à traduire
          target_lang: targetLang // La langue cible
        }),
      });
  
      const data = await response.json();
      const translations = data.translations;
      translations.forEach((translation, index) => {
        console.log(`Traduction ${index + 1}: ${translation.text}`);
        // Met à jour le contenu de la page avec la traduction ici
      });
    } catch (error) {
      console.error('Erreur lors de la traduction:', error);
    }
  }

function getVisibleTextFromPage() {
    // Sélectionne tout le texte visible à l'intérieur du corps du document
    let bodyText = document.body.innerText || document.body.textContent;

    // Supprimer les espaces en trop et les lignes blanches
    let cleanText = bodyText.replace(/\s+/g, ' ').trim();

    return cleanText;
}

// Utilisez cette fonction pour obtenir le texte à traduire


let langueCible = ""
let buttons = document.querySelectorAll("#language button")
let langue = document.querySelector("html")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "french") {
            langueCible = "FR"
            langue.lang = "fr"
        }
        else if (button.id === "english") {
            langueCible = "EN"
            langue.lang = "en"
        }
        else if (button.id === "japanese") {
            langueCible = "JP"
            langue.lang = "jp"
        }
        console.log("langue cible selectionnée : ", langueCible)
    })
    let texteATraduire = getVisibleTextFromPage();
    console.log(texteATraduire)
    translateText(texteATraduire, langueCible);
})