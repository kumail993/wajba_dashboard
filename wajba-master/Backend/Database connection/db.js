const express = require('express');
const mysql = require('mysql');

const app = express();

//app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: '',
    database: 'wajba_system'
})

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

module.exports =db;