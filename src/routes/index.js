const express = require('express');
const path = require('path');  // Import path module

const router = express.Router();

// Route for the base path
router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

// Route for handling login POST request
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ email, password });
});

// Route for serving the login HTML template
router.get('/login', (req, res) => {
  // Correct the path to your HTML file
  res.sendFile('index.html', { root: path.join(__dirname, '../templates') });
});

module.exports = router;
