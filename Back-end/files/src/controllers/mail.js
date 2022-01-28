const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
  
  const nome = req.body.nome;
  const email = req.body.email;
  const mensagem = req.body.mensagem;

  const usuario = 'contadeenviodeforms@gmail.com'; //para colocar o e-mail aqui
  const senha = 'sintese123'; //para colocar a senha aqui
  const destinatario = email; //para quem vamos enviar
  const titulo = 'Mensagem de' + nome;



const transport = nodemailer.createTransport({

    service: 'gmail',
    port: 587, 
    secure: false, 
    auth: {
        user: 'contadeenviodeforms@gmail.com', 
        pass: 'sintese123'
    }
})

const mailOptions = {
    from: 'contadeenviodeforms@gmail.com',
    to: 'viniciuscognolatto@gmail.com',
    subject: "Teste de envio de email 123",
    text: "Some text"
};

transport.sendMail(mailOptions, function(error, info){
    if (error) {
        res.send("Erro ao enviar o formuláio");
        
    } else {
        res.send("Formulario enviado");
    }
});


}
