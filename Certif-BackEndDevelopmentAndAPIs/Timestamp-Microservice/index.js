// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", function(req, res) {
  let dateUnix = req.params.date;
  console.log(dateUnix);
  let dateUtc;
  if (!isNaN(Date.parse(dateUnix))) {
    dateUnix = Date.parse(dateUnix);
    dateUtc = new Date(req.params.date).toUTCString();
    res.json({unix: dateUnix, utc: dateUtc});
  } else if (isNaN(Date.parse(dateUnix))) {
    if (req.params.date == undefined) {
      let now = new Date();
      res.json({unix: Date.parse(now), utc: now.toUTCString()})
    }
    else if (isNaN(Number(req.params.date))) {
      res.json({error: "Invalid Date"});
    } else {
      dateUnix = Number(req.params.date);
      dateUtc = new Date(dateUnix).toUTCString();
      console.log("dateUnix: ", dateUnix, "dateUtc: ", dateUtc);
      res.json({unix: dateUnix, utc: dateUtc});
    }
  }
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
