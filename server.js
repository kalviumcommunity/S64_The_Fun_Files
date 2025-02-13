// Import required packages
const express = require('express');
const dotenv = require('dotenv');  // Import dotenv package
dotenv.config();  // Configure dotenv

const app = express();

// Define the port the server will listen on, either from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic /ping route to test if server is working
app.get('/ping', (req, res) => {
  res.status(200).send('Pong');
});

// Start the server with error handling
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
    process.exit(1); // Exit the process with an error code if server fails to start
  } else {
    console.log(`Server is running on port http://localhost:${PORT}`);
  }
});
