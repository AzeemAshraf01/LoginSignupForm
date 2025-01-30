
//Backend Implementation of API with node js

import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(json()); // Parses incoming JSON requests

// Mock database (Replace this with a real database in a production environment)
const users = [
    { id: 1, email: 'engrazeemashraf@gmail.com' },
    { id: 2, email: 'mazeem.ashraf.017@gmail.com' }
];

// Forgot Password API endpoint
app.post('/api/forgot-password', (req, res) => {
    const { email } = req.body; // Extract the email from the request body
    const user = users.find(u => u.email === email); // Check if the email exists in the database

    if (user) {
        // Normally, you'd send a password reset email here using a service like SendGrid or Nodemailer
        return res.json({ success: true }); // Send a success response
    } else {
        return res.json({ success: false }); // Send a failure response if the email isn't found
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
