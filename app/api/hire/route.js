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

    const formData = await request.json();
    const {
      name,
      email,
      phone,
      developerType,
      developersNeeded,
      duration,
      requirements
    } = formData;


    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      },
    });


    
   


    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Hiring Form Submission from ${name}`,
      text: `
        Name: ${name}}
        Email: ${email}
        Phone: ${phone}
        Developer Type: ${developerType}
        Developers Needed: ${developersNeeded}
        Duration: ${duration}
        Requirements: ${requirements}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Developer Type:</strong> ${developerType}</p>
        <p><strong>Developers Needed:</strong> ${developersNeeded}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Requirements:</strong> ${requirements}</p>
      `,
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