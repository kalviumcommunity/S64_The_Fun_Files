// Import required packages
const express = require('express');
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic /ping route to test if server is working
app.get('/ping', (req, res) => {
  res.status(200).send('Pong');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
