const express = require('express');
const mongoose = require('mongoose');
//const config = require('./config');
const app = express()
const VoiceLog = require('./models/voiceLog');
const MedLog = require('./models/medLog');
const SeLog = require('./models/seLog');

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(res => app.listen(port, () => console.log("Connected to DB, server is now running...")))
.catch(err => console.log(err));

app.use(express.json())

app.get('/', function (req, res) {
    res.send("Welcome to Medella!!!")
})

app.post('/api/post/voice-log', (req,res) => {
    let voiceLog = new VoiceLog({
        patientID: req.body.patientID,
        description: req.body.description, 
        toxicity: req.body.toxicity
    });

    voiceLog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

app.post('/api/post/med-log', (req,res) => {
    let medLog = new MedLog({
        patientID: req.body.patientID,
        dateTime: new Date(),
        content: req.body.content
    });

    medLog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

app.post('/api/post/se-log', (req,res) => {
    let seLog = new SeLog({
        patientID: req.body.patientID,
        dateTime: new Date(),
        content: req.body.content
    });

    seLog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});