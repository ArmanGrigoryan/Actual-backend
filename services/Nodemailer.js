const nodeMailer = require('nodemailer');
const EmailTemplate = require("../utils/templates/email.js");

let transporter;

class NodeMailer{
    constructor() {
        transporter = nodeMailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "58fac8ad94c99e",
                pass: "cab9a5b354de5f"
            }
        });

        //   gmail
        // transporter = nodeMailer.createTransport({
        //     service: "gmail",
        //     host: "smtp.gmail.com",
        //     port: 587,
        //     secure: false,
        //     auth: {
        //         user: "armangrig8@gmail.com",
        //         pass: "llhz ymgv dtgy gpda",
        //     },
        // });

        transporter.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });
    }

    async sendMail(mailDetails, callback) {
        try {
            const info = await transporter.sendMail(mailDetails)
            callback(info);
        } catch (error) {
            console.log(error);
        } 
    };

    async sendHtmlTemplate (req, res) {
        try {
            const { filters } = req.body;
            const emailData = {
                title: "The Voice Of HR (Up And Skilling)",
                heading: "Ակտուալ իրադարձություն",
                description: "Մասնակցեք, ձեռք բերեք գիտելիքներ",
                detailedDescription: "Ակտուալը վերադառնում է նոր խորագրով. լինելու են զանազան իրադարձություններ, ելույթներ, կարծիքների բախումներ։ Տոմսեր ամրագրելու համար զանգահարեք (+374)44-30-30-28:",
                date: "Նոյեմբերի 17, 19։00"
            };

            const options = {
                from: {
                    address: 'actualhrarmenia@gmail.com', 
                    name: 'Actual HR Agency', 
                },
                to: [`${filters.toEmail}`, `${filters.toEmail}`], 
                subject: "Ակտուալ բաժանորդագրություն",
                html: EmailTemplate(emailData),
            }
        
            transporter.sendMail(options, (error, info) => {
                if (error) {
                    res.status(503).send(error);
                } else {
                    res.status(200).send('Email sent successfully');
                }
            });
        } catch (e) {
            console.log("Error happened while sending data", e);
            res.send(e);
        }
    };
}

module.exports = NodeMailer;