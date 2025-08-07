'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MessageSquare, User, Users, Clock, Briefcase, Calendar, X, MessageCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import { showToast } from '@/components/ui/toast'

export default function HireUsPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDeveloper, setSelectedDeveloper] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        developerType: '',
        developersNeeded: 1,
        duration: '',
        requirements: ''
    })

    const developerTypes = [
        'iOS Developer',
        'Android Developer',
        'React Native Developer',
        'Flutter Developer',
        'Node.js Developer',
        'Python Developer',
        'UI/UX Designer',
        'Full Stack Developer',
        'Laravel Developer',
        'Angular Developer'
    ]

   
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        console.log(formData)
        // Validate form
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.developerType.trim() || !formData.developersNeeded || !formData.duration.trim() || !formData.requirements.trim()) {
            showToast(
                "Error",
                "Please fill all required fields",
                "error"
            )
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/hire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    selectedDeveloper: selectedDeveloper || formData.developerType
                })
            })

            if (response.ok) {
                showToast(
                    "Success!",
                    "Your request has been submitted successfully. We'll contact you soon.",
                    "success"
                )
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    developerType: '',
                    developersNeeded: 1,
                    duration: '',
                    requirements: ''
                })
                setIsOpen(false)
            } else {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Submission failed')
            }
        } catch (error) {
            showToast(
                "Error",
                error.message || "Failed to submit your request. Please try again.",
                "error"
            )
            console.error('Submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const openModal = (developer) => {
        setSelectedDeveloper(developer)
        if (developer) {
            setFormData(prev => ({
                ...prev,
                developerType: developer
            }))
        }
        setIsOpen(true)
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Hire Top <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Tech Talent</span>
                            </h1>
                            <p className="mx-auto text-gray-500 md:text-xl text-balance">
                                Build your dream team with our vetted developers. Flexible engagement models to suit your needs.
                            </p>
                        </div>
                        <Button
                            size="lg"
                            onClick={() => openModal('')}
                            className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </section>

            {/* Developer Types Section */}
            <section className="w-full py-12 md:py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                            Our Developer Specializations
                        </h2>
                        <p className="text-gray-500 text-balance">
                            Choose from our pool of highly skilled professionals
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {developerTypes.map((type) => (
                            <Card key={type} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">{type}</CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        Experienced {type}s ready to join your team
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => openModal(type)}
                                    >
                                        Hire {type.split(' ')[0]}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full py-12 md:py-24 bg-gray-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                            Why Choose Our Developers
                        </h2>
                        <p className="text-gray-500 mt-2">
                            We provide the best talent with the best experience
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 rounded-full bg-blue-100">
                                        <Briefcase className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg">Vetted Professionals</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Only the top 5% of applicants make it through our rigorous screening process.</p>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 rounded-full bg-blue-100">
                                        <Calendar className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg">Flexible Engagement</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Hourly, part-time, or full-time - choose what works best for your project needs.</p>
                            </CardContent>
                        </Card>
                        <Card className="h-full md:col-span-2 lg:col-span-1">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 rounded-full bg-blue-100">
                                        <MessageSquare className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg">Risk-Free Trial</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">First month evaluation period with free replacement if needed.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-scroll hide-scrollbar rounded-none p-6">
                    <DialogHeader className="text-center">
                        <DialogTitle className="text-xl">
                            {selectedDeveloper ? `Hire ${selectedDeveloper}` : 'Hire Developers'}
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
                                <Phone className='w-4 h-4 text-blue-600 mb-1' />
                                <p className="font-medium">Skype</p>
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
                                    className="pl-8 h-9" 
                                />
                            </div>
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
                                    className="pl-8 h-9" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="phone">Phone *</Label>
                            <div className="relative">
                                <Phone className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                     
                                    placeholder="+1 (555) 000-0000" 
                                    className="pl-8 h-9" 
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 space-y-1">
                            <Label htmlFor="developerType">Developer Type *</Label>
                            <Select 
                                name="developerType" 
                                value={formData.developerType}
                                onValueChange={(value) => handleSelectChange('developerType', value)}
                                
                            >
                                <SelectTrigger className="w-full h-9 text-sm">
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
                                    className="pl-8 pt-2 min-h-[80px] text-sm"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="sm:col-span-2 pt-2 flex justify-end gap-2">
                            <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => setIsOpen(false)} 
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

            <Footer />
        </div>
    )
    
}