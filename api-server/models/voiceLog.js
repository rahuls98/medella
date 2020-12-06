const mongoose = require('mongoose');

const voiceLogSchema = new mongoose.Schema({
    patientID: mongoose.Schema.Types.ObjectId,
    description: String,
    toxicity: Number
});

const VoiceLog = mongoose.model('VoiceLog', voiceLogSchema);
module.exports = VoiceLog;