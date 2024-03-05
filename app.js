// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route that returns JSON
app.get('/', (req, res) => {
  // Create a sample JSON object
  const data = {
    message: "Hello, world! update",
    number: 42,
    isAwesome: true
  };

  // Return the JSON object as the response
  res.json(data);
});

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
