
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const Resume = require('./models/Resume');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Make public folder accessible
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected successfully!');

        // Start the server
        app.listen(process.env.PORT || 3000, () => {
            console.log('Server running at http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Retrieve resume information
app.get('/', async (req, res) => {
    try {
        const resume = await Resume.findOne();

        if (!resume) {
            return res.status(404).send('Resume not found');
        }

        res.render('index', { resume: resume });

    } catch (error) {
        console.error('Error retrieving resume:', error);
        res.status(500).send('Error loading resume');
    }
});
