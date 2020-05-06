const nodemailer = require('nodemailer');

module.exports = {
    transporter: nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'registertoquiz@gmail.com',
            pass: 'nMYgj@RoKUlM03&wex7#Y6@vbj5CHkK5'
        }
    })
}