// config/index.js

require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  // Add other configuration settings as needed
};
