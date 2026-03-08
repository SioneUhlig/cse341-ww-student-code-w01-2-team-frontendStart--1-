const express = require('express');
const router = express.Router();

// ==========================================
// TEst for the front end to verify that it was working : route (for frontend demo)
// ==========================================
// router.get('/professional', (req, res) => {
//   res.json({
//     professionalName: "JANE SMITH",
//       firstName: "Jane",
//       url: "https://www.linkedin.com"
//     },
//     primaryDescription: " is a Full Stack Web Developer",
//     workDescription1: "I build web applications using modern technologies.",
//     workDescription2: "I love learning and solving problems with code.",
//     linkTitleText: "Connect with me:",
//     linkedInLink: {
//       text: "LinkedIn",
//       link: "https://www.linkedin.com"
//     },
//     githubLink: {
//       text: "GitHub",
//       link: "https://github.com"
//     }
//   });
// });

router.use('/contacts', require('./contacts'));

module.exports = router;