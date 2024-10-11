// translate.js

// fonction pour traduire le texte
async function translateText(text, targetLang) {
    try {
      const response = await fetch('http://localhost:3000/translate', { // S'assurer que le serveur backend tourne
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
      return data.translations[0].text;

    } catch (error) {
      console.error('Erreur lors de la traduction:', error);
    }
  }


// click du bouton : changer la langue cible + initialisation fonction traduction
let langueCible = ""
let buttons = document.querySelectorAll("#language button")
let langue = document.querySelector("html")

buttons.forEach(button => {
    button.addEventListener("click", async () => {
        if (button.id === "french") {
            langueCible = "FR"
            langue.lang = "fr"
        }
        else if (button.id === "english") {
            langueCible = "EN"
            langue.lang = "en"
        }
        else if (button.id === "japanese") {
            langueCible = "JA"
            langue.lang = "ja"
        }
        console.log("langue cible selectionnée : ", langueCible)
        
        await updatePageWithTranslation(langueCible)
    })
})

// fonction qui récupère les éléments à traduire, le texte traduit par la fonction de traduction + remplacement du texte par le texte traduit
async function updatePageWithTranslation(targetLang) {
  const elements = document.querySelectorAll('h1, h2, h3, a, p:not(.puce), span, figcaption'); // Sélectionner les éléments à traduire

    for (let element of elements) {
        // Ne traduire que le contenu textuel (innerText) de l'élément, en évitant le HTML (balises, etc.)
        const originalText = element.innerText.trim(); 
        console.log(originalText);
        if (originalText.length > 0) {
            const translatedText = await translateText(originalText, targetLang); // Traduire le texte
            element.innerText = translatedText; // Remplacer le texte de l'élément avec la traduction
        }
    }
}