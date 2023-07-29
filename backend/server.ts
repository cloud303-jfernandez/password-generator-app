// import the necessary modules. 
// Express is a web app framework for Node.js used to build web applications and APIs. 
// exec is a function from the 'child_process' module in Node.js used to run shell commands.

import express from 'express';
import { exec } from 'child_process';

// Initializing an Express application
// Use a middleware to parse incoming requests with JSON payloads.

const app = express();
app.use(express.json());

// Defined a POST endpoint at path '/generate'. 
// Endpoint will generate a new password when it receives a POST request. 
// It retrieves the value of includeSpecialChars from the JSON payload in the request body.

app.post('/generate', (req, res) => {
    const includeSpecialChars = req.body.includeSpecialChars;

// exec function runs the Py script password_generator.py with the includeSpecialChars value passed as an argument. 
// When the Python script finishes running, it calls the provided callback function.
// Error message is logged to the console and the function returns early. 
// If there was no error, it sends the script's output back to the client in the HTTP response.

    exec(`python3 ../password_generator.py ${includeSpecialChars}`, (error, stdout, stderr) => {
        if (error) {
        console.error(`exec error: ${error}`);
        return;
        }
        res.send(stdout);
    });
    });

// tells the Express app to start listening for HTTP requests on port 3000. 
// When the server starts, it logs "Server running on port 3000" to the console.
app.listen(3000, () => console.log('Server running on port 3000'));