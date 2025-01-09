const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const homeRoute = require('./routes/index.js');

// Use routes
app.use('/', homeRoute);

app.listen(port, () => {
    console.log(`Server running at: `);
    console.log(`➜ Local: \x1b[34mhttp://localhost:${port}\x1b[0m`);
    console.log(`➜ Press \x1b[33mCTRL+C\x1b[0m to stop the server`);
  });