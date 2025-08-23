'use client'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MessageSquare, User, Users, Clock, Briefcase, MessageCircle } from 'lucide-react'
import Recaptcha from '@/components/ui/recaptcha'


export function HireDeveloperModal({
  developerTypes,
  defaultDeveloper = '',
  open,
  onOpenChange,
  onSubmit
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    developerType: defaultDeveloper,
    workType: '',
    developersNeeded: 1,
    duration: '',
    requirements: ''
  })
  const [errors, setErrors] = useState({})
  const recaptchaRef = useRef(null)
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false)

  useEffect(() => {
    if(defaultDeveloper) {
      handleSelectChange('developerType', defaultDeveloper)
    }
  }, [defaultDeveloper])

  const validateField = (name, value) => {
    const stringValue = String(value);
    
    switch (name) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue) ? '' : 'Invalid email format';
      case 'phone':
        return stringValue && !/^\+?[\d\s\-()]{7,}$/.test(stringValue) ? 'Invalid phone number' : '';
      default:
        return !stringValue ? 'This field is required' : '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // For phone field, only allow numbers
    if (name === 'phone') {
      // Remove any non-numeric characters
      const numericValue = value.replace(/[^0-9]/g, '')
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user selects an option
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

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
    ['name', 'email', 'phone', 'developerType', 'workType', 'requirements'].forEach(field => {
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
    e.preventDefault()
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true)

    try {
      // Get the verified reCAPTCHA token from the component
      const recaptchaToken = recaptchaRef.current?.getToken();
      
      // Send the form data with the verified token
      await onSubmit({...formData, recaptchaToken});
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        developerType: defaultDeveloper,
        workType: '',
        developersNeeded: 1,
        duration: '',
        requirements: ''
      });

      // Reset reCAPTCHA
      recaptchaRef.current?.reset();
      setIsRecaptchaVerified(false);

      // Close the modal
      onOpenChange(false);
    } catch (error) {
      console.error('Submission error:', error)
      setErrors(prev => ({ ...prev, submit: 'An unexpected error occurred. Please try again later.' }));
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto rounded-none p-6">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl">
            {defaultDeveloper ? `Hire ${defaultDeveloper}` : 'Hire Developers'}
          </DialogTitle>
          <DialogDescription className="text-sm mt-1">
            Fill out the form and we'll get back to you within 24 hours.
          </DialogDescription>

          {/* Contact Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4'>
            <div className='flex flex-col items-center justify-center p-2 bg-gray-50 rounded-md text-xs'>
              <MessageCircle className='w-4 h-4 text-blue-600 mb-1' />
              <p className="font-medium">Whatsapp</p>
              <p className="text-gray-500">+91 9361450340</p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 bg-gray-50 rounded-md text-xs'>
              <Mail className='w-4 h-4 text-blue-600 mb-1' />
              <p className="font-medium">Email</p>
              <p className="text-gray-500">sales@pickzy.com</p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 bg-gray-50 rounded-md text-xs'>
              <Users className='w-4 h-4 text-blue-600 mb-1' />
              <p className="font-medium">Teams</p>
              <p className="text-gray-500">macratheesh</p>
            </div>
          </div>
        </DialogHeader>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="grid gap-3 pt-4 grid-cols-1 sm:grid-cols-2 text-sm">
          <div className="sm:col-span-2 space-y-1">
            <Label htmlFor="name">Your Name *</Label>
            <div className="relative">
              <User className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className={`pl-8 h-9 ${errors.name ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                className={`pl-8 h-9 ${errors.email ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone">Phone *</Label>
            <div className="relative">
              <Phone className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleChange}
                placeholder="+1 (555) 000-0000" 
                className={`pl-8 h-9 ${errors.phone ? 'border-red-500' : ''}`}
                maxLength={13}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="developerType">Developer Type *</Label>
            <Select 
              value={formData.developerType || defaultDeveloper} 
              onValueChange={(value) => handleSelectChange('developerType', value)}
            >
              <SelectTrigger className={`w-full h-9 text-sm ${errors.developerType ? 'border-red-500' : ''}`}>
                <User className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select developer type" />
              </SelectTrigger>
              <SelectContent>
                {developerTypes.map((type) => (
                  <SelectItem key={type} value={type} className="text-sm">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.developerType && (
              <p className="text-red-500 text-xs mt-1">{errors.developerType}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="workType">Work Preference *</Label>
            <Select 
              value={formData.workType}
              onValueChange={(value) => handleSelectChange('workType', value)}
            >
              <SelectTrigger className={`w-full h-9 text-sm ${errors.workType ? 'border-red-500' : ''}`}>
                <User className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select work mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="onsite" className="text-sm">
                  Onsite
                </SelectItem>
                <SelectItem value="offShore" className="text-sm">
                  Offshore
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.workType && (
              <p className="text-red-500 text-xs mt-1">{errors.workType}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="developersNeeded">Developers Needed</Label>
            <div className="relative">
              <Users className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="developersNeeded"
                name="developersNeeded"
                type="number"
                min="1"
                value={formData.developersNeeded}
                onChange={handleChange}
                className="pl-8 h-9"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="duration">Contract Duration</Label>
            <div className="relative">
              <Clock className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                id="duration" 
                name="duration" 
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 6 months" 
                className="pl-8 h-9" 
              />
            </div>
          </div>

          <div className="sm:col-span-2 space-y-1">
            <Label htmlFor="requirements">Project Requirements *</Label>
            <div className="relative">
              <Briefcase className="absolute left-2 top-3 text-muted-foreground h-4 w-4" />
              <Textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Describe your project needs..."
                className={`pl-8 pt-2 min-h-[80px] text-sm ${errors.requirements ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.requirements && (
              <p className="text-red-500 text-xs mt-1">{errors.requirements}</p>
            )}
          </div>

          {/* ReCAPTCHA Component */}
          <div className="sm:col-span-2">
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
            <p className="text-red-500 text-xs mt-2 text-center sm:col-span-2">{errors.submit}</p>
          )}

          {/* Footer */}
          <div className="sm:col-span-2 pt-2 flex justify-end gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)} 
              className="h-9 px-4 text-sm"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="h-9 px-4 text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}