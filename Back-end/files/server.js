const express = require('express');
const app = express();
const path = require('path')
const sendMail = require('./mail.js')
require('dotenv').config()
const dirname ="C:/Users/user/Documents/marcus-vinicius/Projeto-Trainee-2-2021/"
const PORT = 8080


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/email', (req, res) => {
    const {subject, email, text} = req.body
    console.log('Data: ', req.body)
    sendMail(email, subject, text, function(err, data){
      if(err){
        res.status(500).json({ message: 'Internal Error' })
      } else {
        res.json({ message: 'Email sent' })
      }
    })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'public', 'index.html'));
});

    
app.listen(PORT, () => console.log('Server is starting on PORT, ', 8080));