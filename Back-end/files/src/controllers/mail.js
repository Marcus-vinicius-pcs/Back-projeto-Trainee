const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
  
  const nome = req.body.nome;
  const email = req.body.email;
  const mensagem = req.body.mensagem;
  

  const usuario = process.env.EMAIL; 
  const senha = process.env.SENHA; 
  const destinatario = email; 
  const titulo = 'Mensagem de ' + nome;



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
    from: usuario,
    to: destinatario,
    subject: titulo,
    text: mensagem
};

transport.sendMail(mailOptions, function(error, info){
    if (error) {
        res.send("Erro ao enviar o formuláio");
        
    } else {
        res.send("Formulario enviado");
    }
});


}
