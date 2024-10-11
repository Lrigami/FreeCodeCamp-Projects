// server.js (backend)

const express = require('express'); // Charge le framework Express
const axios = require('axios');     // Pour faire des requêtes HTTP
const cors = require('cors');
require('dotenv').config();         // Pour charger les variables d'environnement depuis .env

const app = express();
const port = process.env.PORT || 3000;  // Définit le port du serveur, par défaut 3000
const deeplApiKey = process.env.DEEPL_API_KEY; // Récupère la clé API de DeepL depuis le fichier .env (besoin d'une free DeepL API key)

// Middleware pour traiter les requêtes POST avec JSON
app.use(cors()); 
app.use(express.json());

// Route POST pour la traduction
app.post('/translate', async (req, res) => {
  const { text, target_lang } = req.body; // Récupère le texte et la langue cible depuis la requête

  try {
    const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
      params: {
        auth_key: deeplApiKey,
        text: text,
        target_lang: target_lang.toUpperCase(), // La langue doit être en majuscules (ex: 'FR', 'EN', 'JA')
      },
    });

    res.json(response.data); // Renvoie la réponse de l'API DeepL au client
  } catch (error) {
    console.error('Erreur lors de la requête DeepL:', error);
    res.status(500).json({ error: 'Erreur lors de la traduction' }); // Gestion des erreurs
  }
});

// Démarre le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
