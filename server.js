// At the top, with other requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // <-- ADD THIS
const path = require('path');

const app = express();
const port = 3000;

// ... (DB Connection and Schema setup)

// --- Middleware Setup ---
// ADD THIS LINE FIRST: It allows requests from other origins (like your HTML file)
app.use(cors()); 

// Serve static files (your HTML, CSS, JS)
app.use(express.static(path.join(__dirname, ''))); 

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ... (Rest of your routes and server logic)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});