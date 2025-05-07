// src/utils/mailer.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,      // tu correo Gmail
    pass: process.env.MAIL_PASS       // contraseña o app password
  }
});

export default async function sendOrderMail({ to, subject, html }) {
  return transporter.sendMail({
    from: `"Fratelli Pastas" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
}
