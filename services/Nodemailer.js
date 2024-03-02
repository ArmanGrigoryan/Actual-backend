const nodeMailer = require('nodemailer');
const EmailTemplate = require("../utils/templates/email.js");

let transporter;

class NodeMailer{
    constructor() {
        transporter = nodeMailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            auth: {
                user: "armangrig8@gmail.com",
                pass: "acY3BDR7HEnm1x8q"
            }
        });

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
            const info = await transporter.sendMail(mailDetails);
            callback(info);
        } catch (error) {
            console.log(error);
        } 
    };

    async sendHtmlTemplate (req, res) {
        try {
            const { filters } = req.body;
            const emailData = {
                title: "",
                heading: "Բաժանորդագրություն",
                description: "Հետևեք մեր նորություններին, տեղեկացեք սպասվելիք դասընթացների և իվենթների մասին առաջինը։",
                detailedDescription: "",
                detailedDescription2: "Ստացեք OutSource֊In-House, ծանոթացեք առաջարկվող ծառայություններին։",
                detailedDescription3: "Ակտուալը ներկայանում է նոր խորագրերով։ Մնացեք մեզ հետ, եղեք իրադարձություններին մասնակից։",
                date: ""
            };

            const options = {
                from: {
                    address: 'info@actualhr.am', 
                    name: 'Actual HR Partner', 
                },
                to: [`${filters.toEmail}`], 
                subject: "Հետադարձ Կապ",
                html: EmailTemplate(emailData),
            }

            transporter.sendMail(options, (error, info) => {
                try {
                    if (error) {
                        res.status(503).send(error);
                    } else {
                        res.status(200).send('Email sent successfully');
                    }
                }
                catch (e) {
                    console.log(e)
                }
            });
        } catch (e) {
            console.log("Error happened while sending data", e);
            res.send(e);
        }
    };
}

module.exports = NodeMailer;