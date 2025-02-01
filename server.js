const express = require('express');
var cors = require('cors')

const dotenv = require('dotenv');
const connectDB = require('./db/connect');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');


// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Add body parsing middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Import routes
const homeRoute = require('./routes'); 
const contactsRoute = require('./routes/contacts');


// Use routes
app.use('/contacts', contactsRoute);
app.use('/', homeRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(port, () => {
    console.log(`Server running at: `);
    console.log(`➜ Local: \x1b[34mhttp://localhost:${port}\x1b[0m`);
    console.log(`➜ Press \x1b[33mCTRL+C\x1b[0m to stop the server`);
  });