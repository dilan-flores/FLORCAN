const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
// Creación del transporter
const transport = nodemailer.createTransport({
    host: process.env.HOST_GMAIL,
    port: process.env.PORT_GMAIL,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
    }
})


// send mail with defined transport object
module.exports.sendMailToUser = async(userMail,token)=>{
    console.log(token);
    let info = await transport.sendMail({
    from: 'admin@FLORCAN.com',
    to: userMail,
    subject: "Verifica tu cuenta de correo electrónico",
    html:`
    <h1>Sistema de gestión (FLORCAN - 🐶 😺)</h1>
    <hr>
    <a href="http://localhost:3000/user/confirmar/${token}">Clic para confirmar tu cuenta</a>
    <footer>FLORSANI TE DA LA BIENVENIDA!</footer>
    </hr>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}