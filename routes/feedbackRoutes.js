const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  const { message } = res.body;

  const mailOptions = {
    to: 'mynameisjakebrown@gmail.com',
    subject: 'Ultimate Pizza - Game Feedback',
    text: message, 
    html: `<p>${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log('Message sent ', info.messageId);
    console.log('Preview URL ', nodemailer.getTestMessageUrl(info));
  });
});

module.exports = router;