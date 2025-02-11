# Contacts API

A robust RESTful API built with Node.js and Express for managing contacts. This project demonstrates industry best practices in API development, including comprehensive input validation, error handling, API documentation, and MongoDB integration.

## Project Structure

```
contacts-api/
├── controllers/
│   └── contactsController.js
├── middleware/
│   ├── asyncHandler.js
│   ├── errorHandler.js
│   └── validateContact.js
├── models/
│   └── contact.js
├── routes/
│   ├── contacts.js
│   └── index.js
├── db/
│   └── connect.js
├── server.js
├── swagger-autogen.js
└── README.md
```

## Features

- RESTful API endpoints for CRUD operations
- MongoDB integration with Mongoose
- Comprehensive input validation
- Robust error handling
- API documentation with Swagger
- CORS support
- Environment-based configuration
- Production-ready error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/herbertmoroni/name-api.git
cd contacts-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Contacts

- `GET /contacts` - Retrieve all contacts
- `GET /contacts/:id` - Retrieve a specific contact
- `POST /contacts` - Create a new contact
- `PUT /contacts/:id` - Update an existing contact
- `DELETE /contacts/:id` - Delete a contact

### Documentation
- `GET /api-docs` - Swagger API documentation

## Request/Response Examples

### Create Contact
```json
POST /contacts
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

### Success Response
```json
{
  "success": true,
  "data": {
    "_id": "60d3b41ef682f34d45c7a3f8"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Validation Error",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

## Validation Rules

- **firstName**: 2-50 characters, required
- **lastName**: 2-50 characters, required
- **email**: Valid email format, required, unique
- **favoriteColor**: 2-30 characters, required
- **birthday**: Valid ISO date format (YYYY-MM-DD), not in future, required

## Error Handling

The API implements comprehensive error handling for:
- Validation errors
- Database errors
- Duplicate entries
- Invalid ObjectId format
- Not found errors
- Internal server errors

## Security Features

- Input validation and sanitization
- CORS configuration
- Environment-based error details
- MongoDB injection protection
- Request payload size limits

## Development

### Generate Swagger Documentation
```bash
npm run swagger-autogen
```

### Run in Development Mode
```bash
npm run dev
```

## Deployment

The application can be deployed to any Node.js hosting platform. Make sure to set the following environment variables:
- `PORT`
- `MONGODB_URI`
- `NODE_ENV=production`

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- [Express Validator](https://express-validator.github.io/) - Input validation
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - API documentation

## Suggested Improvements

1. Add authentication/authorization
2. Implement rate limiting
3. Add request logging
4. Implement caching
5. Add unit and integration tests
6. Add pagination for GET /contacts
7. Implement request compression
8. Add health check endpoint

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

Herbert Moroni Gois