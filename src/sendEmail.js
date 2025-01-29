import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configure the email transport using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'henishelluru@gmail.com', // Your email address
    pass: 'Henish297@', // Your email password or app password
  },
});

// POST endpoint to send email
router.post('/send-email', (req, res) => {
  const { name, company, email, website, contact, budget, enquiry, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'recipient-email@example.com', // Replace with the recipient's email address
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Website: ${website}
      Contact Number: ${contact}
      Budget: ${budget}
      Enquiry: ${enquiry}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

export default router;
