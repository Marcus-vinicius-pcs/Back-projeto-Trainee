const appDb = require('express')
const express = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "produtos"
})

appDb.get('/test', (req, res) => {
    let SQL = "INSERT INTO produtos ( name, cost, category ) VALUES ( 'Camiseta', '60', 'Roupa')"
    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

appDb.use(express.json());