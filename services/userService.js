// services/userService.js

const User = require('../models/userModel');

// Service methods
const userService = {
  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      throw new Error('Failed to create user');
    }
  },
  // Implement other CRUD operations as needed
};

module.exports = userService;
