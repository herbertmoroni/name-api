const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Contacts API',
    version: '1.0.0',
    description: 'API for managing contacts'
  },
  servers: [
    {
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://name-api-whdx.onrender.com',
    }
  ],
  paths: {
    '/contacts': {
      get: {
        tags: ['Contacts'],
        summary: 'Get all contacts',
        responses: {
          200: {
            description: 'List of contacts',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Contact' }
                    }
                  }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['Contacts'],
        summary: 'Create new contact',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ContactInput' }
            }
          }
        },
        responses: {
          201: { description: 'Contact created' },
          400: { description: 'Validation error' },
          409: { description: 'Email already exists' }
        }
      }
    },
    '/contacts/{id}': {
      get: {
        tags: ['Contacts'],
        summary: 'Get contact by ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: { description: 'Contact found' },
          404: { description: 'Contact not found' }
        }
      },
      put: {
        tags: ['Contacts'],
        summary: 'Update contact',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ContactInput' }
            }
          }
        },
        responses: {
          200: { description: 'Contact updated' },
          404: { description: 'Contact not found' }
        }
      },
      delete: {
        tags: ['Contacts'],
        summary: 'Delete contact',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: { description: 'Contact deleted' },
          404: { description: 'Contact not found' }
        }
      }
    }
  },
  components: {
    schemas: {
      Contact: {
        type: 'object',
        required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
        properties: {
          firstName: { type: 'string', example: 'John' },
          lastName: { type: 'string', example: 'Doe' },
          email: { type: 'string', format: 'email', example: 'john@example.com' },
          favoriteColor: { type: 'string', example: 'Blue' },
          birthday: { type: 'string', format: 'date', example: '1990-01-01' }
        }
      },
      ContactInput: {
        $ref: '#/components/schemas/Contact'
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: [] // No file scanning needed
};

module.exports = swaggerJsdoc(options);