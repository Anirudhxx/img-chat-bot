const mongoose = require('mongoose');

const imageAnalysisSchema = new mongoose.Schema({
  text: String,
  imagePath: String,
  extractedText: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('ImageAnalysis', imageAnalysisSchema);
