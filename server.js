const express = require('express');
var cors = require('cors')

const dotenv = require('dotenv');
const connectDB = require('./db/connect');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Add body parsing middleware
app.use(cors())
app.use(express.json());

connectDB();

// Routes
app.use('/', require('./routes'));


app.listen(port, () => {
    console.log(`Server running at: `);
    console.log(`➜ Local: \x1b[34mhttp://localhost:${port}\x1b[0m`);
    console.log(`➜ Press \x1b[33mCTRL+C\x1b[0m to stop the server`);
  });