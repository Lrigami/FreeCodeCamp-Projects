require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lrigami:V7kdeS41oC22@cluster0.anlsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {useNewUrlParser: true, useUnifiedTopology: true});
const dns = require('node:dns');
const urlParser = require('url');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});



const Schema = mongoose.Schema;
const shortenerSchema = new Schema ({
  original_url : {type: String, required: true},
  short_url : Number
});

let Short_Url = mongoose.model('Short_Url', shortenerSchema);

async function createAndSaveShortURL(original, short) {
  try {
    let shortOne = new Short_Url({ original_url: original, short_url: short });
    let data = await shortOne.save();
    console.log("Saved data:", data);
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

app.post('/api/shorturl', function(req, res) {
  let originalURL = req.body.url;
  let shortURL = Math.floor(Math.random() * 10000000);
  const parsedURL = urlParser.parse(originalURL);
  dns.lookup(parsedURL.hostname, (err) => {
    console.log("parsedURLhostname:", parsedURL.hostname);
    if (!/^https?:\/\//.test(originalURL)) {
      return res.json({ error: 'invalid url' });
    } else if (err) {
      console.log(err);
      return res.json({error: 'invalid url'});
    }
    createAndSaveShortURL(originalURL, shortURL);
    res.json({ original_url: req.body.url, short_url: shortURL});
  });
});

app.get('/api/shorturl/:short', function(req, res) {
  console.log("short:", req.params.short);
  Short_Url.findOne({short_url: req.params.short})
  .then((data) => {
    console.log("data", data, data.original_url);
    return res.redirect(`${data.original_url}`);
  })
  .catch((err) => console.log("Error:", err));
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});