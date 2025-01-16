require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://lrigami:${process.env.MDP}@cluster0.anlsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  exercises: [{
    description: { type: String },
    duration: { type: Number },
    date: { type: String }
  }]
});

let User = mongoose.model('User', userSchema);

async function createAndSaveUser(username, response) {
  try {
    let user = new User({ username: username });
    let data = await user.save();
    return response.send(data);
  } catch (err) {
    throw err;
  }
}

app.post("/api/users", function(req, res) {
  createAndSaveUser(req.body.username, res);
});

app.get("/api/users", function(req, res) {
  User.find({ username: { $exists: true } }, {username: 1, _id: 1})
  .then((users) => {
    res.send(users);
  })
  .catch(err => {
    throw err
  });
});

app.post("/api/users/:_id/exercises", function(req, res) {
  const description = req.body.description;
  const duration = req.body.duration;
  let date;
  if (req.body.date) {
    date = new Date(req.body.date);
  } else {
    date = new Date();
  }
  User.findByIdAndUpdate(req.params._id, {$push: { exercises: {description: description, duration: duration, date: date.toDateString() }}}, { new: true, runValidators: true})
    .then((user) => { 
      const lastExercise = user.exercises[user.exercises.length - 1];
      res.send({
        username: user.username,
        description: lastExercise.description,
        duration: lastExercise.duration,
        date: lastExercise.date,
        _id: user._id
      });
    })
    .catch(err => {
      throw err;
    });
});

app.get("/api/users/:_id/logs", function(req, res) {
  const { from, to, limit } = req.query;
  User.findById(req.params._id)
    .then((user) => {
      let filteredExercises = user.exercises;

      if(from) {
        const fromDate = new Date(from);
        filteredExercises = filteredExercises.filter(exercise => new Date(exercise.date) >= fromDate);
      }

      if(to) {
        const toDate = new Date(to);
        filteredExercises = filteredExercises.filter(exercise => new Date(exercise.date) <= toDate);
      }

      if(limit) {
        filteredExercises = filteredExercises.slice(0, parseInt(limit));
      }

      res.send({
        username: user.username,
        count: filteredExercises.length,
        _id: user._id,
        log: filteredExercises.map((exercise) => ({
          description: exercise.description,
          duration: exercise.duration,
          date: exercise.date
        }))
      });
    })
    .catch(err => {
      throw err;
    });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});