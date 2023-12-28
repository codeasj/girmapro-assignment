// emailService.js
const nodemailer = require("nodemailer");
require("dotenv").config();
async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: "By-Anuj",
    to,
    subject,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

module.exports = { sendEmail };
