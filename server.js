// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize app and dotenv
const app = express();
dotenv.config();

// Connect to MongoDB using the connection string from .env
const mongoURI = process.env.MONGO_URI; // Use your MongoDB connection string here

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Add middlewares like JSON parsing, routes, etc.
app.use(express.json());

// Example of a simple home route to check MongoDB connection
app.get('/', (req, res) => {
  const connectionStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected';
  res.send(`MongoDB connection status: ${connectionStatus}`);
});

// Define other routes here...

// Set the port for the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
