const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool ({
    host: 'localhost',
    user:   'root',
    password: '123456',
    database: ' database',
})
app.get('/', (req,res) =>{
    
});
app.listen(5001, ()=> {
    console.log("running on port 5001")
});