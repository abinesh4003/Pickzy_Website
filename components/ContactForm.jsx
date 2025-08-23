'use client';
import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { showToast } from './ui/toast';
import Recaptcha from '@/components/ui/recaptcha';

const services = [
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "Digital Transformation",
  "UI/UX Design",
  "Cybersecurity",
  "Data Analytics",
  "IT Consulting"
];

const budgetRanges = [
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
      case 'phone':
        return value && !/^\+?[\d\s\-()]{7,}$/.test(value) ? 'Invalid phone number' : '';
      default:
        return !value ? 'This field is required' : '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRecaptchaVerified = () => {
    setIsRecaptchaVerified(true);
    // Clear reCAPTCHA error when verified
    if (errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: '' }));
    }
  };

  const handleRecaptchaError = (errorMsg) => {
    setIsRecaptchaVerified(false);
    setErrors(prev => ({ ...prev, recaptcha: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate required fields
    ['firstName', 'email', 'details'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    // Validate reCAPTCHA
    if (!isRecaptchaVerified) {
      newErrors.recaptcha = 'Please complete the reCAPTCHA verification';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Get the verified reCAPTCHA token from the component
      const recaptchaToken = recaptchaRef.current.getToken();
      
      // Send the form data with the verified token
      const response = await fetch('/api/email-send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({...formData, recaptchaToken})
      });

      // First check if response is OK
      if (!response.ok) {
        // Try to get error message from response
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        throw new Error(errorData.error || 'Failed to send message');
      }

      const data = await response.json();

      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        details: ''
      });

      // Reset reCAPTCHA
      recaptchaRef.current.reset();
      setIsRecaptchaVerified(false);

      showToast('success', 'Your message has been sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Submission error:', error);
      setErrors(prev => ({ ...prev, submit: 'An unexpected error occurred. Please try again later.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl border-0" data-aos="fade-right">
      <CardHeader>
        <CardTitle className="text-2xl" data-aos="fade-up">
          Send us a message
        </CardTitle>
        <CardDescription data-aos="fade-up">
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'border-red-500' : ''}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium mb-2 block">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium mb-2 block">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium mb-2 block">
              Company
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="service" className="text-sm font-medium mb-2 block">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className={`w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.service ? 'border-red-500' : ''
              }`}
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="text-sm font-medium mb-2 block">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              className={`w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.budget ? 'border-red-500' : ''
              }`}
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="details" className="text-sm font-medium mb-2 block">
              Project Details *
            </label>
            <Textarea
              id="details"
              name="details"
              placeholder="Tell us about your project, requirements, timeline, and any specific challenges you're facing..."
              className={`min-h-[120px] ${errors.details ? 'border-red-500' : ''}`}
              value={formData.details}
              onChange={handleChange}
            />
            {errors.details && (
              <p className="text-red-500 text-xs mt-1">{errors.details}</p>
            )}
          </div>

          {/* ReCAPTCHA Component */}
          <div>
            <Recaptcha
              ref={recaptchaRef}
              onVerified={handleRecaptchaVerified}
              onError={handleRecaptchaError}
            />
            {errors.recaptcha && (
              <p className="text-red-500 text-xs mt-2">{errors.recaptcha}</p>
            )}
          </div>

          {errors.submit && (
            <p className="text-red-500 text-xs mt-2 text-center">{errors.submit}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Send Message
                <MessageSquare className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </CardContent>
    </Card>
  );
}