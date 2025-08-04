'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {showToast} from '@/components/ui/toast';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
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
        showToast('Error', 'Failed to submit resume','error');
        throw new Error('Failed to submit resume');
      }

      setOpen(false);
      showToast('Success', 'Resume submitted successfully, Our team will get back to you soon!','success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        resume: null
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          Send Us Your Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Submit Your Resume</DialogTitle>
        </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
                
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
              onClick={() => setOpen(false)}
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
  );
}
