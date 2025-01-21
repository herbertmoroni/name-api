const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Add body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Import routes
const homeRoute = require('./routes'); 
const contactsRoute = require('./routes/contacts');

// Use routes
app.use('/', homeRoute);
app.use('/contacts', contactsRoute);

app.listen(port, () => {
    console.log(`Server running at: `);
    console.log(`➜ Local: \x1b[34mhttp://localhost:${port}\x1b[0m`);
    console.log(`➜ Press \x1b[33mCTRL+C\x1b[0m to stop the server`);
  });