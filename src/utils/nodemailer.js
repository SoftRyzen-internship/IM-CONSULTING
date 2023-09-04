import nodemailer from 'nodemailer';

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const transporter = nodemailer.createTransport(config);

export const mailOptions = {
  from: email,
  to: email,
};
