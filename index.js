const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;  
const app = express();

// Parse incoming request bodies as JSON

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(__dirname));  
 

// app.post('/submit-form', (req, res) => {
//     const { name, email, message } = req.body;
  
//     // create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: 'localhost',
//       port: 1025,
//       auth: {
//         user: 'amangeldievsultan2003@email.ru', // replace with your email
//         pass: '1qwerty7' // replace with your password
//       } 
//     });
  
    // set up email data
//     const mailOptions = {
//       from: `English4you!  from ${email}`,
//       to: 'amangeldievsultan2003@email.ru', // replace with your email
//       subject: 'New form submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     };
  
//     // send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error sending email');
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.send('Form submitted successfully');
//       }     
//     });
//   });
  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });   
  
 


app.listen(PORT); 

