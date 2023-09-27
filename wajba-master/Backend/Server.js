const express = require('express');
const app = express();
const db = require('../Backend/Database connection/db')
var bodyParser=require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const RegistrationRourter = require('./routes/user_registration');
const loginRouter = require('./routes/login');


app.use('/Api',RegistrationRourter);
app.use('/Api',loginRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 8081");
});
