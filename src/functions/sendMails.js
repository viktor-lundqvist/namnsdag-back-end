const nodemailer = require('nodemailer');
const auth = require('../../mail-info.json')

module.exports = (recipients, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth
    })

    const mailOptions = {
        from: 'namnsdagar.bot@gmail.com',
        bcc: recipients,
        subject,
        text
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}
