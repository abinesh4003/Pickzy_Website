import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Ensure the request is JSON
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

   const {date,time,user} = await request.json();
  

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port:465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      },
    });

   
    // Email options with all form data
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      replyTo: user.email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Call Scheduled with ${user.name} `,
      text: `
        Call Scheduled Details:
        A new call has been scheduled with ${user.name} on ${date} at ${time}.
        Name: ${user.name}
        Email: ${user.email}
        Phone: ${user.phone}    
        About the Call:${user.notes || 'No additional notes provided.'}
       
      `,
      html: `
        <p><strong>Call Scheduled Details:</strong></p>
        <p>A new call has been scheduled with <strong>${user.name}</strong> on <strong>${date}</strong> at <strong>${time}</strong>.</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>About the Call:</strong> ${user.notes || 'No additional notes provided.'}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email",
        details: error.message 
      },
      { status: 500 }
    );
  }
}