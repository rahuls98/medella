const mongoose = require('mongoose');

const seLogSchema = new mongoose.Schema({
    patientID: mongoose.Schema.Types.ObjectId,
    dateTime: Date,
    content: String
});

const SeLog = mongoose.model('SeLog', seLogSchema);
module.exports = SeLog;