
const mongoose = require('mongoose');
require('dotenv').config();

const Resume = require('./models/Resume');

const resumeData = {
    name: 'BAHAKAE PRECIOUS SOLOMON',

    introduction: 'I am a problem solver who has passion for technology and the role it plays at assisting companies or organizations reach their business goals.',

    profileImage: '/images/Precious.jpg',

    contact: {
        phone: ['+267 76787552', '+91 9037225764'],
        email: 'solomonprecious04@gmail.com',
        github: 'https://github.com/Precious-B',
        linkedin: 'https://bw.linkedin.com/in/bahakae-precious-solomon-01708a1b0'
    },

    education: [
        {
            institution: 'African Leadership Group',
            location: 'Online',
            qualification: 'ALX Software Engineering Programme with a specialization in Frontend Development',
            startDate: 'MAY 2021',
            endDate: 'MAY 2022'
        },
        {
            institution: 'African Union',
            location: 'Online',
            qualification: 'School on Internet Governance',
            startDate: 'APRIL 2026',
            endDate: 'APRIL 2026'
        },
        {
            institution: 'Limkokwing University of Creative Technology',
            location: 'Gaborone',
            qualification: 'BSc (Hons) in Software Engineering with Multimedia',
            startDate: 'JULY 2014',
            endDate: 'JULY 2018'
        }
    ],

    skills: [
        'Java',
        'PHP',
        'HTML',
        'CSS',
        'Python',
        'Winbranch',
        'Pilot Software',
        'Adobe Creative Cloud'
    ],

    experience: [
        {
            company: 'Tswana Fuel - Engen Mmamashia',
            location: 'Mmamashia',
            position: 'Site Admin',
            startDate: 'DECEMBER 2024',
            endDate: 'JANUARY 2026',
            responsibilities: [
                'Providing customer service.',
                'Ensuring safety and compliance.',
                'Managing inventory.',
                'Created financial reports.',
                'WinBranch system.',
                'Maintaining software systems.',
                'Software utilization and basic troubleshooting.'
            ]
        },
        {
            company: 'Black Box Restaurant',
            location: 'Gaborone',
            position: 'Admin Officer',
            startDate: 'FEBRUARY 2024',
            endDate: 'MAY 2024',
            responsibilities: [
                'Handling queries by employees and clients.',
                'Filing documents and maintaining records.',
                'Managing office inventory.'
            ]
        },
        {
            company: 'BranSol Signage Co',
            location: 'Gaborone',
            position: 'Graphic Designer',
            startDate: 'FEBRUARY 2023',
            endDate: 'MAY 2023',
            responsibilities: [
                'Came up with designs according to our customers’ needs.',
                'Operated printers and vinyl cutter.',
                'Performed clerical duties.',
                'Performed installation of software applications and hardware.',
                'Social media management.'
            ]
        },
        {
            company: 'Crystal Paradise',
            location: 'Gaborone',
            position: 'Service Officer/Reservations Officer',
            startDate: 'NOVEMBER 2021',
            endDate: 'OCTOBER 2022',
            responsibilities: [
                'Developed and maintained exceptional customer service.',
                'Created financial reports.',
                'Booked customers sessions and set up meetings.',
                'Managing staff and booking plans.',
                'New menu development.',
                'Multimedia management.'
            ]
        },
        {
            company: 'Ministry of Communications and Innovation',
            location: 'Gaborone',
            position: 'Intern Assistant to the Director of Policy Development ICT',
            startDate: 'OCTOBER 2019',
            endDate: 'MAY 2021',
            responsibilities: [
                'Assisted the Director of Policy Development on ongoing projects.',
                'Worked as a member of the Infrastructure Separation and Transfer Project, Cybersecurity Project and other project-related duties.',
                'Conducted research, analysis, compilation, and presentation of data.',
                'Consulting with other project members weekly.'
            ]
        },
        {
            company: 'Ministry of Nationality, Immigration and Gender Affairs',
            location: 'Gaborone',
            position: 'Intern Immigration Citizenship Officer',
            startDate: 'MAY 2019',
            endDate: 'OCTOBER 2019',
            responsibilities: [
                'Assisting and communicating with clients on a daily basis.',
                'Performed records duties and clerical duties.',
                'Assisted in application processing.',
                'Captured data into the computerized Immigration Citizen System (ICS).'
            ]
        },
        {
            company: 'Unique Tiles and Sanitaries',
            location: 'Gaborone',
            position: 'IT Technician/Social Media Manager',
            startDate: 'JULY 2018',
            endDate: 'NOVEMBER 2018',
            responsibilities: [
                'Managing business data and creating data backups.',
                'Installing new software applications and hardware.',
                'Troubleshooting and diagnosing software and hardware problems.',
                'Graphic design and social media management.'
            ]
        }
    ],

    references: 'References available upon request.'
};

// Save or update the resume document
async function seedResume() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Connected to MongoDB!');

        const savedResume = await Resume.findOneAndUpdate(
            { name: resumeData.name },
            { $set: resumeData },
            {
                upsert: true,
                returnDocument: 'after',
                runValidators: true
            }
        );

        console.log('Resume saved successfully!');
        console.log('Resume ID:', savedResume._id);

    } catch (error) {
        console.error('Error saving resume:', error);
    } finally {
        await mongoose.disconnect();
    }
}

seedResume();
