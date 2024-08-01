const express = require('express');
const Userdata = require("../models/Users");
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
   
  } catch (e) {
    console.log('./signup', e);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    // Additional login logic here
  } catch (e) {
    console.log('./login', e);
    res.status(500).json({ message: 'Internal server error' });
}
});

module.exports = router;