# Use an official Python and Node.js runtime as a parent image

FROM nikolaik/python-nodejs:latest

# Set the working directory in the container to /app

WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container

COPY ./backend/package*.json ./

# Install the application dependencies inside the container

RUN npm install

# Copy the rest of your application's source files into the /app directory in the container

COPY ./backend .
COPY ./password_generator.py ..
COPY ./frontend/index.html ../public/index.html

# Make port 3000 available outside the container

EXPOSE 3000

# Define the command to run your application

CMD [ "npx", "ts-node-dev", "--respawn", "--transpile-only", "server.ts" ]