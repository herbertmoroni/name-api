const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
    version: '1.0.0'
  },
  //host: 'name-api-whdx.onrender.com',
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    {
      name: "Contact Operations",
      description: "API endpoints for managing contacts"
    }
  ],
  definitions: {
    Contact: {
      type: 'object',
      properties: {
        firstName: { type: 'string', example: 'Moroni' },
        lastName: { type: 'string', example: 'Gois' },
        email: { type: 'string', example: 'herbertmoroni@gmail.com' },
        favoriteColor: { type: 'string', example: 'green' },
        birthday: { type: 'string', format: 'date', example: '1982-10-14' }
      }
    }
  }
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/*.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);