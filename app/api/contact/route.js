import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, subject, message } = body;

  const transporter = nodemailer.createTransport({
    host: "mail.exhibitsolutions.co.ke",
    port: 465,
    secure: true,
    auth: {
      user: "moses.karani@exhibitsolutions.co.ke",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `${email}`,
      to: "admin@exhibitsolutions.co.ke",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    margin: 0;
                    padding: 0;
                    color: #333;
                  }
                  .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                  }
                  .email-header {
                    background-color: #0056b3;
                    color: #ffffff;
                    text-align: center;
                    padding: 20px 0;
                    font-size: 24px;
                    font-weight: bold;
                  }
                  .email-body {
                    padding: 20px;
                  }
                  .email-body h2 {
                    color: #0056b3;
                  }
                  .email-body p {
                    margin: 10px 0;
                    line-height: 1.5;
                  }
                  .email-body .detail {
                    background-color: #f9f9f9;
                    padding: 10px;
                    margin: 10px 0;
                    border-radius: 4px;
                  }
                  .email-footer {
                    text-align: center;
                    font-size: 12px;
                    color: #888;
                    padding: 10px;
                    border-top: 1px solid #ddd;
                    background: #f4f4f9;
                  }
                </style>
              </head>
              <body>
                <div class="email-container">
                  <div class="email-header">
                    New Contact Form Submission
                  </div>
                  <div class="email-body">
                    <h2>Contact Details</h2>
                    <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email Address:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <div class="detail">
                      <p>${message}</p>
                    </div>
                    <h2>Additional Information</h2>
                    <p>The user submitted this form on your website's contact page. Ensure to respond promptly for the best experience.</p>
                  </div>
                  <div class="email-footer">
                    This email was sent automatically by your website's contact form. If you have any concerns, please contact your system administrator.
                  </div>
                </div>
              </body>
              </html>
            `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
}
