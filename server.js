// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes'); // Import the routes

dotenv.config();

const app = express();
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json()); // For parsing application/json
app.use('/api', routes); // Use the CRUD routes under the /api path

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
