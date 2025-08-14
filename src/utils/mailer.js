import { emailSender, emailSenderPassword } from "./environments";
import nodemailer from "nodemailer";

export const sendMail = async ({ toMail, subject, body }) => {
  // for gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailSender,
      pass: emailSenderPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // for hostinger
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.hostinger.com", // Replace with your SMTP server host
  //   port: 465, // Replace with your SMTP server port (587 or 465)
  //   secure: true, // true for 465, false for 587
  //   auth: {
  //     user: emailSender, // Your email address
  //     pass: emailSenderPassword, // Your email emailSenderPassword or app-specific emailSenderPassword
  //   },
  //   tls: {
  //     rejectUnauthorized: false, // Use only if necessary
  //   },
  // });

  const mailData = {
    from: emailSender, // sender address
    to: toMail, // list of receivers
    subject, // Subject line
    html: body, // html body
  };

  try {
    const info = await transporter.sendMail(mailData);
    // console.log("Email sent: " + info.response);~
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
