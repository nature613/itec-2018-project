const nodemailer = require('nodemailer');

module.exports = {
    transporter: nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'registertoquiz@gmail.com',
            pass: 'iquiz2018'
        }
    })
}