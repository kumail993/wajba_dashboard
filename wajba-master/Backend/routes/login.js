
const express = require('express');
const router = express.Router();
const db = require('../Database connection/db');


const app = express();
//require('dotenv').config();

router.route('/login').post(async (req, res, next) => {

  try {
    const { crew_email, crew_password } = req.body;

    // Check if the email exists in the 'restaurant_credential' table
    db.query(
      'SELECT * FROM restaurant_credential WHERE crew_user_email = ?',
      [crew_email],
      (err, results) => {
        if (err) {
          console.error('Error checking email:', err);
          return res.status(500).json({ error: 'Internal server error.' });
        }

        if (results.length === 0) {
          return res.status(404).json({ error: 'User not found.' });
        }

        const user = results[0];

        // Check if the password matches
        if (user.crew_user_password !== crew_password) {
          return res.status(401).json({ error: 'Incorrect password.' });
        }

        // You can generate and return a JWT token here for authentication if needed.
        // Example:
        // const token = generateToken(user);
        // return res.status(200).json({ token });

        return res.status(200).json({ message: 'Login successful.' });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }


    
});

module.exports = router;



