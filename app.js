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

// Health check for uptime monitors and load balancers
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Unknown routes return JSON instead of Express's default HTML page
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Errors thrown in routes return JSON instead of a stack trace
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Set up the server to listen on PORT (defaults to 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
