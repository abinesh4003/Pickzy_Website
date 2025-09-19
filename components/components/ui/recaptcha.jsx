// components/ui/recaptcha.js
'use client';
import { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaComponent = forwardRef(({ onVerified, onError, ...props }, ref) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');
  const recaptchaInstance = useRef(null);
  
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const verifyRecaptchaWithServer = async (token) => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recaptchaToken: token })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'reCAPTCHA verification failed');
      }

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      return false;
    }
  };

  const handleChange = async (token) => {
    setToken(token);
    setError('');
    
    // Verify the token with our server
    const isValid = await verifyRecaptchaWithServer(token);
    
    if (isValid) {
      if (onVerified) {
        onVerified();
      }
    } else {
      setError('reCAPTCHA verification failed. Please try again.');
      setToken(null);
      if (onError) {
        onError('reCAPTCHA verification failed. Please try again.');
      }
      if (recaptchaInstance.current) {
        recaptchaInstance.current.reset();
      }
    }
  };

  const handleError = () => {
    setError('reCAPTCHA verification failed. Please try again.');
    setToken(null);
    if (onError) {
      onError('reCAPTCHA verification failed. Please try again.');
    }
  };

  const handleExpire = () => {
    setToken(null);
    if (onError) {
      onError('reCAPTCHA token expired. Please verify again.');
    }
  };

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    getToken: () => token,
    reset: () => {
      setToken(null);
      setError('');
      if (recaptchaInstance.current) {
        recaptchaInstance.current.reset();
      }
    },
    execute: () => {
      if (recaptchaInstance.current) {
        recaptchaInstance.current.execute();
      }
    }
  }));

  return (
    <div className="my-4">
      <div className="flex justify-center md:justify-start">
        <div className="recaptcha-wrapper">
          <ReCAPTCHA
            ref={recaptchaInstance}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleChange}
            onErrored={handleError}
            onExpired={handleExpire}
            {...props}
          />
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-2 text-center md:text-left">
          {error}
        </p>
      )}
    </div>
  );
});

ReCaptchaComponent.displayName = 'ReCaptchaComponent';

export default ReCaptchaComponent;