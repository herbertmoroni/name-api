const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: process.env.NODE_ENV === 'production' ? 'your-production-domain.com' : 'localhost:3000',
  schemes: process.env.NODE_ENV === 'production' ? ['https'] : ['http'],
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);