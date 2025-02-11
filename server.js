const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/', require('./routes'));

// Error handling middleware (must be after routes)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at: `);
    console.log(`➜ Local: \x1b[34mhttp://localhost:${port}\x1b[0m`);
    console.log(`➜ Press \x1b[33mCTRL+C\x1b[0m to stop the server`);
  });