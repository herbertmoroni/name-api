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
- Deployed on Render

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
(https://name-api-whdx.onrender.com)

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [Render](https://render.com/) - Cloud hosting platform

## Author

Herbert Moroni Gois
