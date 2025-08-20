'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { showToast } from '@/components/ui/toast';

export function ResumeSubmissionDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (if provided)
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(formData.resume.type)) {
        newErrors.resume = 'Only PDF, DOC, and DOCX files are allowed';
      } else if (formData.resume.size > maxSize) {
        newErrors.resume = 'File size must be less than 5MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if(name=='phone'){
      // Remove any non-numeric characters
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    }
    else{
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    
     // Validate on change
    if (name in errors) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Validation Error', 'Please fix the errors in the form', 'error');
      return;
    }

    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('position', formData.position);
      formPayload.append('message', formData.message);
      formPayload.append('resume', formData.resume);

      const response = await fetch('/api/resume-send', {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error(await response.text() || 'Failed to submit resume');
      }

      setOpen(false);
      showToast('Success', 'Resume submitted successfully! Our team will get back to you soon.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        resume: null
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      showToast('Error', error.message || 'Failed to submit resume. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
  <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 px-3">
      Send Us Your Resume
    </Button>
  </DialogTrigger>
  <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-[500px] p-3 sm:p-4">
    <DialogHeader className="mb-2">
      <DialogTitle className="text-base sm:text-lg">Submit Your Resume</DialogTitle>
    </DialogHeader>
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
        <div className="space-y-1">
          <Label htmlFor="name" className="text-xs sm:text-sm">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`h-7 text-xs sm:text-sm px-2 rounded-sm ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email" className="text-xs sm:text-sm">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`h-7 text-xs sm:text-sm px-2 rounded-sm ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`h-7 text-xs sm:text-sm px-2 rounded-sm ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="position" className="text-xs sm:text-sm">Position Interested In</Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="h-7 text-xs sm:text-sm px-2 rounded-sm"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="message" className="text-xs sm:text-sm">Cover Letter (Optional)</Label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`text-xs sm:text-sm border p-2 rounded-sm border-gray-300 focus:border-gray-400 p-2 h-[50px] w-full `}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="resume" className="text-xs sm:text-sm">Resume *</Label>
        <div className="flex flex-col xs:flex-row items-stretch gap-1.5 sm:gap-2">
          <Input
            readOnly
            value={formData.resume?.name || "No file chosen"}
            className={`flex-1 bg-white text-gray-700 cursor-default text-xs sm:text-sm h-7 px-2 rounded-sm ${errors.resume ? 'border-red-500' : ''}`}
          />
          <Button
            type="button"
            variant="default"
            className="bg-gray-200 hover:bg-gray-100 border border-gray-300 text-black text-xs sm:text-sm h-7 px-2 rounded-sm"
            onClick={() => document.getElementById("resume")?.click()}
          >
            Choose File
          </Button>
        </div>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
        {errors.resume && <p className="text-red-500 text-xs mt-0.5">{errors.resume}</p>}
        <p className="text-xs text-muted-foreground mt-0.5">
          Accepted formats: PDF, DOC, DOCX (Max 5MB)
        </p>
      </div>

      <div className="flex flex-col xs:flex-row justify-end gap-1.5 sm:gap-2 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setOpen(false);
            setErrors({});
          }}
          disabled={loading}
          className="text-xs sm:text-sm h-7 px-3 rounded-sm"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={loading} 
          className="text-xs sm:text-sm h-7 px-3 rounded-sm"
        >
          {loading ? 'Submitting...' : 'Submit Resume'}
        </Button>
      </div>
    </form>
  </DialogContent>
</Dialog>
  );
}