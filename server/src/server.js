const http = require('http');

//populates process.env with variables from .env file
//call first so that we can use environment variables in other files
require('dotenv').config();  

const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

//Use this pattern when we need to load some data before starting the server
async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} 

startServer();