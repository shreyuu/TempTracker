# Use the official Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install

# Copy project files
COPY . /app/

# Expose the port the app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
