// controllers/userController.js

const userService = require('../services/userService');

// Controller methods
const userController = {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Implement other controller methods as needed
};

module.exports = userController;
