// pages/api/verify-recaptcha.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Ensure the request is JSON
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    const { recaptchaToken } = await request.json();

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA with Google
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
    
    const recaptchaResponse = await fetch(recaptchaVerificationUrl, {
      method: 'POST'
    });
    
    const recaptchaData = await recaptchaResponse.json();
    
    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData);
      return NextResponse.json(
        { 
          success: false, 
          error: "reCAPTCHA verification failed",
          details: recaptchaData['error-codes'] || []
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "reCAPTCHA verified successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("reCAPTCHA API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to verify reCAPTCHA",
        details: error.message 
      },
      { status: 500 }
    );
  }
}