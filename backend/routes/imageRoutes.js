const express = require('express');
const multer = require('multer');
const { analyzeImage } = require('../controllers/imageController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/analyze', upload.single('image'), analyzeImage);

module.exports = router;
