const mongoose = require('mongoose');

const medLogSchema = new mongoose.Schema({
    patientID: mongoose.Schema.Types.ObjectId,
    dateTime: Date,
    content: String
});

const MedLog = mongoose.model('MedLog', medLogSchema);
module.exports = MedLog;