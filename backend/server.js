const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://your-vercel-app-url.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://anirudhchauhan74000:aurvahealth@cluster0.jezwebj.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0", { serverSelectionTimeoutMS: 30000 })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/images', imageRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
