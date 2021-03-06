# Pull the base image
FROM node:13-alpine

# Set the working dir
WORKDIR /app

# Copy frontend
COPY ./frontend /app

# Install dependencies
RUN npm install

# Build production
RUN npm build

# Listen
EXPOSE 3000

# Set server
ENTRYPOINT npm run start