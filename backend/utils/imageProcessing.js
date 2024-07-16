const sharp = require('sharp');

const preprocessImage = async (imagePath) => {
  const processedImagePath = `${imagePath}-processed.png`;
  await sharp(imagePath)
    .grayscale()
    .resize(1200)
    .toFile(processedImagePath);
  return processedImagePath;
};

module.exports = { preprocessImage };
