# Image Text Extractor

This project is a MERN stack application that allows users to upload an image and input text, extracts text from the image using OCR (Tesseract.js), and stores the results in a MongoDB database. The extracted text is displayed on the frontend.

## Features

- Upload an image and input text
- Extract text from the image using Tesseract.js
- Store the results in MongoDB
- Display the extracted text on the frontend

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Multer
- Sharp
- Tesseract.js

## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- MongoDB instance running locally or on a cloud service like MongoDB Atlas
- Git installed on your machine

### 1. Clone the repository

```sh
git clone git@github.com:Anirudhxx/img-chat-bot.git
cd image-text-extractor
```

### 2. Backend Setup

Navigate to the `backend` directory and install the necessary dependencies:

```sh
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add your MongoDB URI:

```env
MONGO_URI=your_mongodb_uri
```

Start the backend server:

```sh
node server.js
```

The backend server should now be running on [http://localhost:5001](http://localhost:5001).

### 3. Frontend Setup

Navigate to the `frontend` directory and install the necessary dependencies:

```sh
cd ../frontend
npm install
```

Start the frontend server:

```sh
npm start
```

The frontend server should now be running on [http://localhost:3000](http://localhost:3000).

### 4. Using the Application

1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Use the UI to upload an image and input text.
3. Submit the form to see the extracted text displayed in a box on the frontend.

## Directory Structure

```plaintext
image-text-extractor/
├── backend/
│   ├── models/
│   │   └── ImageAnalysis.js
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── App.js
    │   │   ├── ImageUpload.js
    │   │   └── ResultDisplay.js
    │   ├── App.css
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    ├── package.json
    └── .env
```

## Contributing

Feel free to open issues or submit pull requests if you have any improvements or bug fixes.
