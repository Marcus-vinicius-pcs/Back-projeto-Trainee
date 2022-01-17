const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')

const auth ={
    auth: {
        api_key: '0917d1cbc2b1b9de644a8cc51184f4b1-0be3b63b-912be47f', 
        domain: 'sandboxaa14f41105d441bc88f9ec595400d2c9.mailgun.org'
    }
}


const transport = nodemailer.createTransport(mailGun(auth))

const sendMail = (email,subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'contadeenviodeforms@gmail.com',
        subject,
        text
    }
    
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err){
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail