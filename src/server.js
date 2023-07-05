import "App.js"
const express = require('express');
const app = express();

// Define your variable
let myVariable = "App.js"

// Create an endpoint that streams the variable value
app.get('/stream-variable', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.flushHeaders();

  setInterval(() => {
    res.write(`Variable value: ${myVariable}\n`);
  }, 1000);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
