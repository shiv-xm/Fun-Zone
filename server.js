const express = require('express');
const sendMail = require('./sendEmail');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/sendemail', (req, res) => {
  const { name, email, subject } = req.body;
  sendMail(name, email, subject);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});






