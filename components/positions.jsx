'use client';
import { useEffect, useState } from 'react';
import { MapPin, DollarSign, Clock, ArrowRight, Briefcase, BarChart2, Award, Users } from 'lucide-react';
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

export default function PositionsPage() {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applyID, setApplyID] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  // Atomic increment for views
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

  // Atomic increment for applicants
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
        showToast('Error', 'Failed to submit resume', 'error');
        throw new Error('Failed to submit resume');
      }

      setOpen(false);
      showToast('Success', 'Resume submitted successfully, Our team will get back to you soon!', 'success');
      
      // Update applicant count after successful submission

    if(positionId){
      await handleApplySubmit();
    }
      clearForm();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
const close=()=>{
  setOpen(false)
  clearForm();

}
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

        console.log(result);
        const formattedPositions = Array.isArray(result.data)
          ? result.data.filter((position) => position.status.trim()=="active")
          : [];

        setPositions(formattedPositions);
        console.log("formattedPositions:",formattedPositions);
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
      <section className="py-20 bg-white">
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

                      <div>
                        <Skeleton className="h-4 w-24 mb-2" />
                        <div className="flex flex-wrap gap-2">
                          {[...Array(4)].map((_, idx) => (
                            <Skeleton key={idx} className="h-6 w-16" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-8">
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
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
                          {position.experience && (
                            <Badge variant="outline" className="flex items-center">
                              <Award className="h-3 w-3 mr-1" />
                              {position.experience}
                            </Badge>
                          )}
                        </div>

                        <p className="text-gray-600 mb-4">{position.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            {position.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                            {position.salary}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-orange-600" />
                            Posted on {new Date(position.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>

                        {position.responsibilities && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center">
                              <Briefcase className="h-4 w-4 mr-2" />
                              Key Responsibilities:
                            </h4>
                            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                              {position.responsibilities.split('\n').map((item, idx) => (
                                item.trim() && <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {position.benefits && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center">
                              <BarChart2 className="h-4 w-4 mr-2" />
                              Benefits & Perks:
                            </h4>
                            <p className="text-gray-600 text-sm">{position.benefits}</p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Requirements:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {position.requirements?.map((req, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <Dialog open={open} onOpenChange={setOpen} >
                          <DialogTrigger asChild>
                            <Button 
                              className='w-full bg-gradient-to-r from-blue-600 to-purple-600' 
                              size="lg" 
                              onClick={() => handleViewSubmit(position)}
                            >
                              Apply Now <span><ArrowRight className="w-5 h-5 ml-2" /></span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]"onInteractOutside={(e) => e.preventDefault()} >
                            <DialogHeader>
                              <DialogTitle>Submit Your Resume</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={(e) => handleSubmit(e, position.id)} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="name">Full Name *</Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="email">Email *</Label>
                                  <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="phone">Phone Number</Label>
                                  <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="position">Position Interested In</Label>
                                  <Input
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="message">Cover Letter (Optional)</Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  rows={4}
                                />
                              </div>

                              <div>
                                <Label htmlFor="resume">Resume *</Label>
                                <Input
                                  id="resume"
                                  name="resume"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                  required
                                />
                                <p className="text-sm text-muted-foreground mt-1">
                                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                                </p>
                              </div>

                              <div className="flex justify-end gap-2 pt-4">
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() =>close()}
                                  disabled={loading}
                                >
                                  Cancel
                                </Button>
                                <Button type="submit" disabled={loading}>
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