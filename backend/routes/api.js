const express = require('express');
const router = express.Router();
const Ground = require('../models/Ground');

// Get all grounds
router.get('/grounds', async (req, res) => {
  try {
    const grounds = await Ground.find();
    res.json(grounds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get a specific ground
router.get('/grounds/:id', async (req, res) => {
  try {
    const ground = await Ground.findById(req.params.id);
    res.json(ground);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: 'Ground not found' });
  }
});

// Create a new ground (for admin)
router.post('/grounds', async (req, res) => {
  // ...
});

// ... other endpoints for booking, user authentication, etc.

module.exports = router;