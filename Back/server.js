import express from 'express';
import { generateUploadURL } from './s3.js';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();



// Define the /s3Url route
app.get('/s3Url', async (req, res) => {
  try {
    const url = await generateUploadURL();
    res.json({ url }); // Respond with a JSON object containing the S3 URL
  } catch (error) {
    console.error("Error generating S3 URL:", error);
    res.status(500).json({ error: "Failed to generate S3 URL" });
  }
});



// Serve static files from the 'front' directory
app.use(express.static('front'));

// Start the server
app.listen(5501, () => console.log("Server running on http://127.0.0.1:5501"));
