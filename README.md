# Name Display API

A simple Node.js API that displays a name when accessing the home route. This project demonstrates basic web server setup using Express.js, proper route handling, and deployment configuration. Also, I am using it to test Render for the first time.

## Project Structure

```
name-api/
├── controllers/
│   └── homeController.js
├── routes/
│   └── index.js
├── app.js
├── package.json
└── README.md
```

## Features

- Express.js web server
- MVC architecture with separate routes and controllers
- Deployed on Render
- Returns JSON response with a name

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/herbertmoroni/name-api.git
cd name-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

- `GET /` - Returns a JSON object containing a name

Example response:
```json
{
    "name": "Moroni Gois"
}
```

## Deployment

This application is deployed on Render. You can access the live version at:
[Your-Render-URL]

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [Render](https://render.com/) - Cloud hosting platform

## Author

Herbert Moroni Gois

## License

This project is licensed under the MIT License - see the LICENSE file for details
