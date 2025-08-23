'use client';
import { useEffect, useState, useRef } from 'react';
import { MapPin, DollarSign, Clock, ArrowRight, Briefcase, BarChart2, Award, Users, Eye, FileText, ListChecks, Gift, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ResumeSubmissionDialog } from '@/components/resume-submission-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { showToast } from './ui/toast';
import Recaptcha from '@/components/ui/recaptcha';

export default function PositionsPage() {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(null);
  const [openApplyDialog, setOpenApplyDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applyID, setApplyID] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const recaptchaRef = useRef(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    recaptcha: ''
  });

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email';
        break;
      case 'phone':
        if (value && !/^[\d\s+-]{10,15}$/.test(value)) error = 'Please enter a valid phone number';
        break;
      case 'resume':
        if (!value) error = 'Resume is required';
        else if (value.size > 5 * 1024 * 1024) error = 'File size must be less than 5MB';
        else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type)) {
          error = 'Only PDF, DOC, and DOCX files are allowed';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Remove any non-numeric characters
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Validate on change
    if (name in errors) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, name === 'resume' ? formData.resume : value)
      }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, resume: file }));
      
      // Validate file
      setErrors(prev => ({
        ...prev,
        resume: validateField('resume', file)
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      resume: validateField('resume', formData.resume),
      recaptcha: isRecaptchaVerified ? '' : 'Please complete the reCAPTCHA verification'
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleRecaptchaVerified = () => {
    setIsRecaptchaVerified(true);
    setErrors(prev => ({ ...prev, recaptcha: '' }));
  };

  const handleRecaptchaError = (errorMsg) => {
    setIsRecaptchaVerified(false);
    setErrors(prev => ({ ...prev, recaptcha: errorMsg }));
  };

  const handleViewSubmit = async (position) => {
    setApplyID(position.id);
    try {
      const response = await fetch(`/api/positions/${position.id}/view`, {
        method: 'PUT'
      });

      if (!response.ok) {
        console.error('Failed to update view count');
      }
      setFormData(prev => ({
        ...prev,
        position: position.title
      }));
    } catch (error) {
      console.error('Error updating view count:', error);
    }
  };

  const handleApplySubmit = async () => {
    try {
      const response = await fetch(`/api/positions/${applyID}/apply`, {
        method: 'PUT'
      });

      if (!response.ok) {
        console.error('Failed to update applicant count');
      }
    } catch (error) {
      console.error('Error updating applicant count:', error);
    }
  };

  const handleSubmit = async (e, positionId) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Validate form
    if (!validateForm()) {
      console.error('Form validation failed');
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
      if (formData.resume) {
        formPayload.append('resume', formData.resume);
      }

      const response = await fetch('/api/resume-send', {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error('Failed to submit resume');
      }

      showToast('Success', 'Resume submitted successfully! Our team will get back to you soon.', 'success');
      setOpenApplyDialog(false);
      
      if (positionId) {
        await handleApplySubmit();
      }
    } catch (error) {
      console.error(error);
      showToast('Error', 'Failed to submit resume. Please try again.', 'error');
    } finally {
      setLoading(false);
      clearForm();
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setIsRecaptchaVerified(false);
    }
  };

  const close = () => {
    setOpenApplyDialog(false);
    clearForm();
    setErrors({
      name: '',
      email: '',
      phone: '',
      resume: '',
      recaptcha: ''
    });
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setIsRecaptchaVerified(false);
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null
    });
  };

  const openPositionDetails = (position) => {
    setSelectedPosition(position);
    setOpenDetailsDialog(true);
    handleViewSubmit(position);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/positions');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const formattedPositions = Array.isArray(result.data)
          ? result.data.filter((position) => position.status.trim() === "active")
          : [];

        setPositions(formattedPositions);
      } catch (err) {
        console.error("Failed to fetch positions:", err);
        setError(err.message || 'Failed to load positions');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-8 md:py-12 lg:py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-24" />
                      </div>

                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-3/4 mb-4" />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-8 flex gap-2">
                      <Skeleton className="h-10 w-32" />
                      <Skeleton className="h-10 w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8">
            <h3 className="font-bold text-lg mb-2">Error loading positions</h3>
            <p>{error}</p>
          </div>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
          >
            Retry
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-white" id='positions'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"  >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" >Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore exciting opportunities to grow your career and make an impact with cutting-edge technology.
          </p>
        </div>

        {positions.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No open positions at the moment</h3>
            <p className="text-gray-600 mb-4">Check back later or send us your resume for future opportunities</p>
            <ResumeSubmissionDialog />
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {positions.map((position) => (
                <Card
                  key={position.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                          <Badge variant="secondary">{position.department}</Badge>
                          <Badge variant="outline">{position.type}</Badge>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">{position.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            {position.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Briefcase className="h-4 w-4 mr-2 text-green-600" />
                            {position.experience}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-orange-600" />
                            Posted on {new Date(position.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 lg:mt-0 lg:ml-8 flex gap-5 items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="p-1 h-8 w-8"
                          onClick={() => openPositionDetails(position)}
                        >
                          <Info className="w-4 h-4 text-blue-600" />
                        </Button>
                   <Dialog open={openApplyDialog} onOpenChange={setOpenApplyDialog}>
  <DialogTrigger asChild>
    <Button
      className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-xs sm:text-sm py-1 h-8'
      onClick={() => handleViewSubmit(position)}
    >
      Apply Now <span><ArrowRight className="w-3 h-3 ml-1" /></span>
    </Button>
  </DialogTrigger>
  <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-[400px] md:max-w-[500px] p-3 sm:p-4" onInteractOutside={(e) => e.preventDefault()}>
    <DialogHeader className="mb-2">
      <DialogTitle className="text-base sm:text-lg">Submit Your Resume</DialogTitle>
    </DialogHeader>
    <form onSubmit={(e) => handleSubmit(e, position.id)} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
        <div className="space-y-1">
          <Label htmlFor="name" className="text-xs sm:text-sm">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-7 text-xs sm:text-sm px-2 py-1 rounded-sm"
          />
          {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email" className="text-xs sm:text-sm">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="h-7 text-xs sm:text-sm px-2 py-1 rounded-sm"
          />
          {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            maxLength={13}
            value={formData.phone}
            onChange={handleChange}
            className="h-7 text-xs sm:text-sm px-2 py-1 rounded-sm"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="position" className="text-xs sm:text-sm">Position Interested In</Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="h-7 text-xs sm:text-sm px-2 py-1 rounded-sm"
            readOnly
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
            className="flex-1 bg-white text-gray-700 cursor-default text-xs sm:text-sm h-7 px-2 py-1 rounded-sm"
          />
          <Button
            type="button"
            variant="default"
            className="bg-gray-200 hover:bg-gray-100 border border-gray-300 text-black text-xs sm:text-sm h-7 px-2 py-1 rounded-sm"
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
        {errors.resume && <p className="text-xs text-red-500 mt-0.5">{errors.resume}</p>}
        <p className="text-xs text-muted-foreground mt-0.5">
          Accepted formats: PDF, DOC, DOCX (Max 5MB)
        </p>
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
      <div className="flex flex-col xs:flex-row justify-end gap-1.5 sm:gap-2 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => close()}
          disabled={loading}
          className='text-xs sm:text-sm h-7 px-3 py-1 rounded-sm'
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={loading} 
          className='text-xs sm:text-sm h-7 px-3 py-1 rounded-sm'
        >
          {loading ? 'Submitting...' : 'Submit Resume'}
        </Button>
      </div>
    </form>
  </DialogContent>
</Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Position Details Dialog */}
            <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
              <DialogContent
                className="sm:max-w-4xl w-[calc(100%-2rem)] max-h-[90dvh] flex flex-col p-0"
              >
                {selectedPosition && (
                  <>
                    {/* Header - Fixed */}
                    <div className="flex-shrink-0 p-4 border-b bg-white h-[10%]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl break-words">
                          {selectedPosition.title}
                        </DialogTitle>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge variant="secondary">{selectedPosition.department}</Badge>
                          <Badge variant="outline">{selectedPosition.type}</Badge>
                          {selectedPosition.experience && (
                            <Badge variant="outline" className="flex items-center">
                              <Award className="h-3 w-3 mr-1" />
                              {selectedPosition.experience}
                            </Badge>
                          )}
                        </div>
                      </DialogHeader>
                    </div>

                    {/* Scrollable Content */}
                    <div
                      className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar break-all"
                      style={{ height: "80%" }}
                    >
                      {/* Location / Salary / Posted Date */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center break-words">
                          <MapPin className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                          {selectedPosition.location}
                        </div>

                        <div className="flex items-center break-words">
                          <Clock className="h-4 w-4 mr-2 text-orange-600 flex-shrink-0" />
                          Posted on{" "}
                          {new Date(selectedPosition.updatedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>

                      {/* Description */}
                      {selectedPosition.description && (
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
                            <FileText className="h-4 w-4 mr-2 flex-shrink-0 text-gray-700" />
                            Job Description
                          </h4>
                          <div className="space-y-2 text-gray-600">
                            {selectedPosition.description
                              .split("\n")
                              .map(
                                (item, idx) =>
                                  item.trim() && (
                                    <p key={idx} className="whitespace-pre-wrap leading-relaxed">
                                      {item}
                                    </p>
                                  )
                              )}
                          </div>
                        </div>
                      )}

                      {/* Responsibilities */}
                      {selectedPosition.responsibilities && (
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
                            <ListChecks className="h-4 w-4 mr-2 flex-shrink-0 text-gray-700" />
                            Key Responsibilities
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {selectedPosition.responsibilities
                              .split("\n")
                              .map((item, idx) => item.trim() && <li key={idx}>{item}</li>)}
                          </ul>
                        </div>
                      )}

                      {/* Requirements */}
                      {selectedPosition.requirements?.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 flex-shrink-0 text-gray-700" />
                            Requirements
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPosition.requirements.map((req, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="max-w-full break-words whitespace-normal"
                              >
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer - Fixed */}
                    <div className="flex-shrink-0 p-4 border-t bg-white h-[10%] flex justify-end items-center">
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-purple-600"
                        size="lg"
                        onClick={() => {
                          setOpenDetailsDialog(false);
                          setOpenApplyDialog(true);
                        }}
                      >
                        Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Don't see a position that fits? We're always looking for talented people!</p>
              <ResumeSubmissionDialog />
            </div>
          </>
        )}
      </div>
    </section>
  );
}