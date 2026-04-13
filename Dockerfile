FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .
# Expose app port
EXPOSE 3000

# Run app
CMD ["node", "index.js"]