'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

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
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

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
        
        // Validate on change
        if (['firstName', 'email', 'details'].includes(name)) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        ['firstName', 'email', 'details'].forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

   const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    setSubmitStatus({ success: false, message: 'Please fix the errors in the form' });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch('/api/email-send', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
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

    setSubmitStatus({ 
      success: true, 
      message: 'Your message has been sent successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Submission error:', error);
    setSubmitStatus({ 
      success: false, 
      message: error.message || 'An unexpected error occurred. Please try again later.' 
    });
  } finally {
    setIsSubmitting(false);
  }
};

    return (
        <Card className="shadow-xl border-0" data-aos="fade-right">
            <CardHeader>
                <CardTitle className="text-2xl" data-aos="fade-up" data-aos-delay="100">
                    Send us a message
                </CardTitle>
                <CardDescription data-aos="fade-up" data-aos-delay="150">
                    Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
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

                    <div data-aos="fade-up" data-aos-delay="250">
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

                    <div data-aos="fade-up" data-aos-delay="300">
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

                    <div data-aos="fade-up" data-aos-delay="350">
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

                    <div data-aos="fade-up" data-aos-delay="400">
                        <label htmlFor="service" className="text-sm font-medium mb-2 block">
                            Service Interested In
                        </label>
                        <select
                            id="service"
                            name="service"
                            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="450">
                        <label htmlFor="budget" className="text-sm font-medium mb-2 block">
                            Project Budget
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.budget}
                            onChange={handleChange}
                        >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                                <option key={range.value} value={range.value}>{range.label}</option>
                            ))}
                        </select>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="500">
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

                    {submitStatus && (
                        <div
                            className={`p-4 rounded-md ${
                                submitStatus.success 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}
                            data-aos="fade-up"
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 transition-all"
                        data-aos="fade-up"
                        data-aos-delay="550"
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

                <p
                    className="text-xs text-gray-500 text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    By submitting this form, you agree to our privacy policy and terms of service.
                </p>
            </CardContent>
        </Card>
    );
}