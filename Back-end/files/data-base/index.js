const app = require('express')
const express = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "produtos"
})

app.get('/test', (req, res) => {
    let SQL = "INSERT INTO produtos ( name, cost, category ) VALUES ( 'Camiseta', '60', 'Roupa')"
    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

app.use(express.json());
