const nodeMailer = require('nodemailer');

class NodeMailer{
    constructor(){
        this.transporter = nodeMailer.createTransport({
            service: 'Mail.ru',
            auth:{
                user: process.env.NODEMAILER_LOGIN,
                pass: process.env.NODEMAILER_PASSWORD,
            }
        });
        this.transporter.verify((error) => console.log(error?error:'Server is ready to take our my'))
    }

    async sendMessage(email, activationCode){
        return await this.transporter.sendMail(message.verification(email, activationCode))
    }
}

export default NodeMailer;