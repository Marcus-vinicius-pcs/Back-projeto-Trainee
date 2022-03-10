const express = require('express')
const app = express()
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "produtos"
})
// Retorna um elemento

app.get('/get/produtos/:id', (req, res) => {
    const { id } = req.params;
    let SQL = "SELECT * from prod WHERE idprod = ?";
    db.query(SQL, [id],(err, result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})
//novo banco de dados o nome das tabelas está diferente, se atentar a isos
//a req funcinoou no localhost 4040 mas a integração com o front n funcionou
//Retorna todos os elementos
app.get('/get/produtos', (req, res) => {
    let SQL = "SELECT * from info";
    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

//Criar novo elemento
app.post('/register/produtos', (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
    
    let SQL = "INSERT INTO prod ( name, cost, category ) VALUES ( ?,?,? )"

    db.query(SQL, [name, cost, category],(err, result) => {
        console.log(err)
    })
})

//Atualizar um curso
app.put('/edit/produtos/', (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
    
    let SQL = "UPDATE prod SET name = ?, cost = ?, category = ? WHERE idprod = ?";
    db.query(SQL, [name, cost, category, id],(err, result) => {
        if(err) console.log(err)
        else res.send(result);        
    })
})

//Deletar um curso
app.delete('/delete/produtos/:id', (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM prod WHERE idprod = ?"
    db.query(SQL, [id], (err, result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})

//teste de integração
app.get('/', (req, res) => {
    let SQL = 
    "INSERT INTO prod ( name, cost, category ) VALUES ( 'Blusa', '120', 'Roupa')";

    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

module.exports = app