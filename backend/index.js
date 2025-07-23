// server/index.js

require('dotenv').config(); 

const bcrypt = require('bcrypt'); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken'); 

const app = express();

app.use(express.json());

// CORS Configuration
// IMPORTANT: For production, replace "*" with your Netlify frontend URL (e.g., 'https://your-echoes-app.netlify.app')
// Or, if you need to support both local dev and production:
// app.use(cors({
//   origin: [
//     'http://localhost:5173', // Your React dev server (Vite's default)
//     'http://localhost:3000', // Common alternative React dev server (CRA's default)
//     process.env.FRONTEND_URL // Will be your Netlify URL in production (e.g., set this env var in Render.com)
//   ],
//   credentials: true // Set to true if your frontend sends cookies/authorization headers (like JWT in cookies)
// }));


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;

app.get("/hello", (req, res) => {
    return res.status(200).json({ message: "Hello World from Echoes Backend!" });
});

app.listen(PORT, () => {
    console.log(`Echoes Backend Server is running on port ${PORT}`);
});

module.exports = app; 