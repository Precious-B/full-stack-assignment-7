
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    introduction: {
        type: String
    },

    profileImage: {
        type: String
    },

    contact: {
        phone: [String],
        email: String,
        github: String,
        linkedin: String
    },

    education: [
        {
            institution: String,
            location: String,
            qualification: String,
            startDate: String,
            endDate: String
        }
    ],

    skills: [String],

    experience: [
        {
            company: String,
            location: String,
            position: String,
            startDate: String,
            endDate: String,
            responsibilities: [String]
        }
    ],

    references: {
        type: String
    }

});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
