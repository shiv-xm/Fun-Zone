const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendemail', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'braincleanser908@gmail.com', // Your email address here
      pass: '101820022001' // Your email password here
    }
  });

  const mailOptions = {
    from: email,
    to: 'braincleanser908@gmail.com', // Your email address here
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Oops! Something went wrong. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you for contacting us. We will get back to you soon!');
    }
  });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });

