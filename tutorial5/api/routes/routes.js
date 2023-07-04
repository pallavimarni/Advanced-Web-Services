const express = require('express');
const router = express.Router();
const users = require('../database/users.js');

// GET API endpoint for retrieving a list of users
router.get('/users', (req, res) => {
  try {
    if (!users || !users.length) {
      return res.status(404).json({ error: 'Users not found' });
    }

    res.json({
      message: 'Users retrieved',
      success: true,
      users: users
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST API endpoint for creating a new user
router.post('/add', (req, res) => {
  try {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({ error: 'Incorrect input. Email and firstName are required.' });
    }

    const id = generateId();
    const newUser = { email, firstName, id };
    users.push(newUser);

    res.status(201).json({ message: 'User added', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT API endpoint for updating a user
router.put('/update/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName } = req.body;

    if (!email && !firstName) {
      return res.status(400).json({ error: 'Incorrect input. Email or firstName is required.' });
    }

    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (email) {
      user.email = email;
    }
    if (firstName) {
      user.firstName = firstName;
    }

    res.json({ message: 'User updated', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET API endpoint for retrieving a single user
router.get('/user/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Helper function to generate a unique ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = router;
