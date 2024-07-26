const nodemailer = require('nodemailer')

const sendMail = (email, subject, text, html) => {
   
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.OUTLOOK_EMAIL,
                pass: process.env.OUTLOOK_PASS
            }
        })
    
        let mailOptions = {
            from: process.env.OUTLOOK_EMAIL,
            to: `${email}`,
            subject: `${subject}`,
            text: `${text}`,
            html: `${html}`
        };
    
        //envio de correo
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                reject(error)
            } else{
                resolve(info.response)
            }
        })
    
    
}

module.exports = sendMail