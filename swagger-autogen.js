const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'name-api-whdx.onrender.com',
  schemes: ['https'],
  //host: 'localhost:3000',
  //schemes: ['http'],
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);