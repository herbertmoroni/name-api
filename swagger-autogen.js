const dotenv = require('dotenv');
const swaggerAutogen = require('swagger-autogen')();

// Load environment variables
dotenv.config();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: process.env.NODE_ENV === 'dev' ? 'localhost:3000' : 'name-api-whdx.onrender.com' ,
  schemes: process.env.NODE_ENV === 'dev' ? ['http'] : ['https'],
};

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);