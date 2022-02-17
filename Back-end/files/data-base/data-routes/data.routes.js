const data = require('express-promise-router')();

//Arranjo de exemplo pra emular a database
const elem = ['e1', 'e2', 'e3', 'e4'];

// Retorna um elemento

data.get('/produtos/:id', (req, res) => {
    const { id } = req.params;

    return res.json(elem[id]);
})

//Retorna todos os elementos
data.get('/produtos', (req, res) => {
    return res.json(elem);
})

//Criar novo elemento
data.post('/produtos', (req, res) => {
    const { name } = req.body;
    elem.push(name);
    
    return res.json(elem)
})

//Atualizar um curso
data.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    elem[id] = name;
    
    return res.json(elem);
})

//Deletar um curso
data.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    elem.splice(id, 1);
    return res.json({message: 'Elemento deletado com sucesso!'});
})

module.exports = data