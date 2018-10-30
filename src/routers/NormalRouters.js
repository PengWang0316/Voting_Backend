const normalRouter = require('express').Router();
// const cloudinary = require('cloudinary');

require('dotenv').config(); // Loading .env to process.env

// Controllers import
const fetchCandidatesInfo = require('../controllers/FetchCandidatesInfo');

// cloudinary.config({ // confige the cloudinary library.
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });


/* Checking jwt token */
normalRouter.get('/fetchCandidatesInfo', fetchCandidatesInfo);

module.exports = normalRouter;
