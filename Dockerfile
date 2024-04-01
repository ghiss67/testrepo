# Dockerfile for Node.js application

# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to container
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
