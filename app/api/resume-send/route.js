import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Allowed file types and size (e.g., PDF, DOC, DOCX)
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form data
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const phone = formData.get('phone')?.trim() || 'Not provided';
    const position = formData.get('position')?.trim() || 'Not specified';
    const message = formData.get('message')?.trim() || 'No cover letter provided';
    const resumeFile = formData.get('resume');

    // Validate required fields
    if (!name || !email || !resumeFile) {
      return NextResponse.json(
        { error: 'Name, email, and resume are required.' },
        { status: 400 }
      );
    }

    // File type and size validation
    if (!ALLOWED_TYPES.includes(resumeFile.type) || resumeFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Invalid file type or size exceeds 5MB limit.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const fileBuffer = await resumeFile.arrayBuffer();
    const fileData = Buffer.from(fileBuffer);

    // Validate environment variables
    const {
      MAIL_HOST,
      MAIL_PORT,
      MAIL_USERNAME,
      MAIL_PASSWORD,
      MAIL_FROM_NAME,
      MAIL_FROM_ADDRESS,
      RECIPIENT_EMAIL,
      MAIL_ENCRYPTION,
    } = process.env;

    if (
      !MAIL_HOST ||
      !MAIL_PORT ||
      !MAIL_USERNAME ||
      !MAIL_PASSWORD ||
      !MAIL_FROM_NAME ||
      !MAIL_FROM_ADDRESS ||
      !RECIPIENT_EMAIL
    ) {
      return NextResponse.json(
        { error: 'Server email configuration is incomplete.' },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: parseInt(MAIL_PORT),
      secure: MAIL_ENCRYPTION === 'ssl', // true for SSL, false for TLS
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Define mail options
    const mailOptions = {
      from: `"${MAIL_FROM_NAME}" <${MAIL_FROM_ADDRESS}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Resume Submission: ${name} - ${position}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}
Message: ${message}
      `,
      html: `
        <h2>New Resume Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: fileData,
          contentType: resumeFile.type,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Resume submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process resume submission.' },
      { status: 500 }
    );
  }
}
