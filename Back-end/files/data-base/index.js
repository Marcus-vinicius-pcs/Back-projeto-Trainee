const express = require('express')
const app = express()
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "produtos"
})

app.get('/', (req, res) => {
    let SQL = 
    "INSERT INTO prod ( name, cost, category ) VALUES ( 'Camiseta', '60', 'Roupa')";

    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

module.exports = app