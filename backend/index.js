require('dotenv').config();

const bcrypt = require('bcrypt');
const config = require('./config.json');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose.connect(config.connectionString);

const PORT = process.env.PORT || 5000;

app.get("/hello", (req, res) => {
    return res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = app;



