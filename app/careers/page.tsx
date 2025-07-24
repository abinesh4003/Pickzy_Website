"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Coffee, 
  Laptop,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Tech City",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description: "We're looking for an experienced full-stack developer to join our growing team and work on cutting-edge projects.",
      requirements: ["5+ years experience", "React/Node.js", "AWS/Cloud", "Team leadership"],
      posted: "2 days ago"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Tech City",
      type: "Full-time", 
      salary: "$90,000 - $120,000",
      description: "Join our design team to create beautiful and intuitive user experiences for our clients' applications.",
      requirements: ["3+ years experience", "Figma/Adobe XD", "User research", "Design systems"],
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $140,000", 
      description: "Help us build and maintain scalable infrastructure and deployment pipelines for our client projects.",
      requirements: ["4+ years experience", "AWS/Azure", "Docker/Kubernetes", "CI/CD"],
      posted: "3 days ago"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Tech City",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      description: "Lead cross-functional teams to deliver exceptional software projects on time and within budget.",
      requirements: ["PMP certification", "Agile/Scrum", "Client management", "3+ years experience"],
      posted: "5 days ago"
    },
    {
      title: "Mobile Developer",
      department: "Engineering", 
      location: "Remote / Tech City",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      description: "Develop native and cross-platform mobile applications using React Native and Flutter.",
      requirements: ["React Native/Flutter", "iOS/Android", "3+ years experience", "App Store deployment"],
      posted: "1 week ago"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$115,000 - $145,000",
      description: "Apply machine learning and data analysis to solve complex business problems for our clients.",
      requirements: ["Python/R", "Machine Learning", "SQL", "PhD/Masters preferred"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-500" />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options"
    },
    {
      icon: <Laptop className="w-8 h-8 text-blue-500" />,
      title: "Latest Technology",
      description: "Top-of-the-line equipment and access to cutting-edge tools"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      title: "Learning & Development",
      description: "Conference attendance, online courses, and skill development budget"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Competitive Compensation",
      description: "Competitive salaries, equity options, and performance bonuses"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Amazing Team",
      description: "Work with talented, passionate people in a collaborative environment"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      title: "Quality Excellence", 
      description: "We maintain the highest standards in everything we do, from code quality to client service."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage continuous skill development."
    },
    {
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices that allow our team to thrive personally and professionally."
    }
  ];

  return (
 <div className="min-h-screen bg-white">
  <Header />

  {/* Hero Section */}
  <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="zoom-in" data-aos-duration="800">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Amazing Team</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build your career with PickZy, a company that values innovation, growth, and work-life balance. Help us create exceptional software solutions that transform businesses worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Team Members</div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
          <div className="text-gray-600">Countries</div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
          <div className="text-gray-600">Employee Rating</div>
        </div>
      </div>
    </div>
  </section>

  {/* Why Work With Us */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work at PickZy?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're more than just a workplace - we're a community of passionate individuals working together to create amazing software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="flip-up"
            data-aos-delay={index * 100}
          >
            <CardContent className="p-6">
              <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Company Values */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          These core values guide how we work, make decisions, and treat each other every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-lg"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Open Positions */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="zoom-out">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore exciting opportunities to grow your career and make an impact with cutting-edge technology.
        </p>
      </div>

      <div className="space-y-6">
        {openPositions.map((position, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                    <Badge variant="secondary">{position.department}</Badge>
                    <Badge variant="outline">{position.type}</Badge>
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
                      Posted {position.posted}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12" data-aos="fade-up">
        <p className="text-gray-600 mb-4">Don't see a position that fits? We're always looking for talented people!</p>
        <Button variant="outline" size="lg">
          Send Us Your Resume
        </Button>
      </div>
    </div>
  </section>

  {/* Application Process */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We've designed a transparent and efficient process to help you showcase your skills and learn about us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            step: "01",
            title: "Application Review",
            description: "We review your application and resume within 48 hours"
          },
          {
            step: "02", 
            title: "Initial Interview",
            description: "30-minute video call to discuss your background and interests"
          },
          {
            step: "03",
            title: "Technical Assessment",
            description: "Practical coding challenge or portfolio review"
          },
          {
            step: "04",
            title: "Final Interview",
            description: "Meet the team and discuss role expectations and culture fit"
          }
        ].map((step, index) => (
          <div 
            key={index} 
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                {step.step}
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 z-[-1] w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Employee Testimonial */}
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card 
        className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <CardContent className="p-12 text-center">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="David Kim"
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          <blockquote className="text-xl text-gray-700 mb-6 italic" data-aos="fade-up" data-aos-delay="300">
            "PickZy has been an incredible place to grow my career. The team is supportive, the projects are challenging, and the work-life balance is amazing. I've learned more in my two years here than in my previous five years combined."
          </blockquote>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="font-semibold text-gray-900">David Kim</div>
            <div className="text-gray-600">Senior Full Stack Developer</div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-down">
        Ready to Join Our Team?
      </h2>
      <p className="text-xl mb-8 text-blue-100" data-aos="fade-down" data-aos-delay="100">
        Take the next step in your career and help us build amazing software solutions that make a difference.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8 py-3"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          View Open Positions
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600" 
          asChild
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Link href="/contact">Contact HR</Link>
        </Button>
      </div>
    </div>
  </section>

  <Footer />
</div>
  );
}