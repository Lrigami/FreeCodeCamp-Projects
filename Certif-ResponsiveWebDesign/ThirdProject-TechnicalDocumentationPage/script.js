const localStorageTheme = localStorage.getItem("theme"); //récupère le "theme" du localStorage
const button = document.querySelector("[data-theme-toggle]");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)"); //récupère les préférences d'affichage

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) { //permet de retourner "theme" comme string : dark ou light
    if (localStorageTheme !== null) {
      return localStorageTheme; // return une valeur de localStorageTheme
    }
  
    if (systemSettingDark.matches) {
      return "dark"; // return dark
    }
  
    return "light"; // return light
  }

// Change the setting on html element : 
function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme); //Après avoir récupérer "dark" ou "light" via currentThemeSetting, on attribue cette valeur à l'attribut "data-theme" de l'élément html
  }

//Appel des fonctions : 
let currentThemeSetting = calculateSettingAsThemeString({localStorageTheme, systemSettingDark}); //on appelle ici la fonction pour savoir 
updateThemeOnHtmlEl({ theme: currentThemeSetting }); //on appelle la fonction avec la valeur de theme qui change pour prendre la valeur de currentThemeSettings

//AddEventListener sur le bouton :
button.addEventListener("click", () => {
    // au click : newTheme var regarder si currentThemeSetting = dark. Si oui newTheme = light, sinon newTheme = dark
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    // on remplace la valeur de theme du localStorage par newTheme
    localStorage.setItem("theme", newTheme);
    // on remplace la valeur de l'attribut data-theme par newThem pour l'élément html 
    updateThemeOnHtmlEl({theme: newTheme});

    // Enfin, les paramètres actuels sont définis avec newTheme
    // Comme cela, si on rappuie sur le bouton, la const newTheme changera puisque currentThemeSetting aura changé également
    currentThemeSetting = newTheme;
})