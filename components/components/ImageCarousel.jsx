import { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80",
      alt: "Team collaboration"
    },
    {
      src: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=2070&q=80",
      alt: "Software development"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80",
      alt: "Business meeting"
    },
    {
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=2070&q=80",
      alt: "Data analysis"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right');
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl border border-white/20">
      {/* Carousel Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        {/* Slides */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'translate-x-0'
                  : index < currentSlide
                    ? '-translate-x-full'
                    : 'translate-x-full'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Award Badge */}
      <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 md:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-md sm:shadow-lg border border-white/20">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <Award className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-300 flex-shrink-0" />
          <div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-white">Top Rated</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-white/80">Clutch 2025</div>
          </div>
        </div>
      </div>

      {/* Stats Badge */}
      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-1.5 sm:p-2 md:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-md sm:shadow-lg border border-white/20">
        <div className="text-center">
          <div className="text-sm sm:text-xl md:text-2xl font-bold">98%</div>
          <div className="text-[10px] sm:text-xs md:text-sm">Client Retention</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;