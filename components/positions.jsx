'use client';
import { useEffect, useState } from 'react';
import { MapPin, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ResumeSubmissionDialog } from '@/components/resume-submission-dialog';

export default function PositionsPage() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          ? result.data.map(pos => ({
              ...pos,
              id: pos.id || pos._id?.toString()
            }))
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
        <div className="text-center mb-16" data-aos="zoom-out">
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
              {positions.map((position, index) => (
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
                            {position.requirements?.map((req, idx) => (
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
              <ResumeSubmissionDialog />
            </div>
          </>
        )}
      </div>
    </section>
  );
}