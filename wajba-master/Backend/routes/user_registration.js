
const express = require('express');
const router = express.Router();
const db = require('../Database connection/db');


const app = express();
//require('dotenv').config();

router.route('/registration').post(async (req, res, next) => {
  
    try {
        const {crew_user, restaurant_name, crew_email, crew_password } = req.body;
        console.log(req.body);
    
        // Check if the restaurant name exists in the 'restaurant' table
        db.query('SELECT * FROM restaurant WHERE resturant_name = ?', [restaurant_name], (err, results) => {
          if (err) {
            console.error('Error checking restaurant:', err);
            return res.status(500).json({ error: 'Internal server error.' });
          }
    
          if (results.length === 0) {
            return res.status(404).json({ error: 'Restaurant not found.' });
          }
    
          // Check if the email already exists in the 'restaurant_credentials' table
          db.query('SELECT * FROM restaurant_credential WHERE crew_user_email = ?', [crew_email], (err, results) => {
            if (err) {
              console.error('Error checking email:', err);
              return res.status(500).json({ error: 'Internal server error.' });
            }
    
            if (results.length > 0) {
              return res.status(409).json({ error: 'Email already exists.' });
            }
    
            // Insert data into the 'restaurant_credentials' table
            db.query(
              'INSERT INTO restaurant_credential (crew_user, restaurant_name, crew_user_email, crew_user_password) VALUES (?, ?, ?, ?)',
              [ crew_user, restaurant_name, crew_email, crew_password],
              (err, results) => {
                if (err) {
                  console.error('Error inserting data:', err);
                  return res.status(500).json({ error: 'Internal server error.' });
                }
    
                return res.status(201).json({ message: 'Data inserted successfully.' });
              }
            );
          });
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error.' });
      }
    
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const db = require('../Database connection/db');


// const app = express();
// //require('dotenv').config();

// router.route('/registration').post(async (req, res, next) => {

//     const sql = "INSERT INTO registration(`crew-user`,`restaurant-name`,`crew-user-email`,`crew-user-password`) VALUES(?)";
//     const values =[
//         req.body.crew_user,
//         req.body.restaurant_name,
//         req.body.crew_user_email,
//         req.body.crew_user_password,
//     ]
//     db.query(sql,[values],(err, data)=>{
//         if(err){
//             return res.json("Error");
//         }
//         return res.json(data);
//     })

// });

// module.exports = router;

