const sharp = require('sharp');
const tesseract = require('tesseract.js');
const ImageAnalysis = require('../models/ImageAnalysis');
const { preprocessImage } = require('../utils/imageProcessing');

const analyzeImage = async (req, res) => {
  const { text } = req.body;
  const imagePath = req.file.path;

  try {
    const processedImagePath = await preprocessImage(imagePath);
    const { data: { text: extractedText } } = await tesseract.recognize(processedImagePath, 'eng');

    const imageAnalysis = new ImageAnalysis({ text, imagePath: processedImagePath, extractedText });
    await imageAnalysis.save();

    res.json({ extractedText });
  } catch (error) {
    console.error('Error during image analysis:', error);
    res.status(500).json({ error: 'Failed to analyze image', details: error.message });
  }
};

module.exports = { analyzeImage };
