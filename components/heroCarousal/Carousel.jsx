"use client";

import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [slideKey, setSlideKey] = useState(0);

  // Reset animations on slide change
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSlideKey(prev => prev + 1);
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <style jsx global>{`
        /* Animation Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flipUp {
          from { opacity: 0; transform: rotateX(90deg); }
          to { opacity: 1; transform: rotateX(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Animation Classes */
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-flipUp { animation: flipUp 0.8s ease-out forwards; }
        .animate-fadeLeft { animation: fadeLeft 0.8s ease-out forwards; }
        .animate-fadeRight { animation: fadeRight 0.8s ease-out forwards; }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

        /* Gradient overlay for images */
        .gradient-overlay {
          position: relative;
        }
        .gradient-overlay::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.6) 50%, rgba(17, 24, 39, 0.1) 100%);
        }
      `}</style>

    <div
  className="relative w-full overflow-hidden bg-gray-900"
  ref={emblaRef}
  style={{ height: 'calc(100vh - var(--navbar-height))' }}
>
  <div className="flex h-full" key={`slides-${slideKey}`}>
    {/* Slide 1 */}
    <div className="flex-shrink-0 w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-12 md:py-20">
      {/* Left */}
      <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-12 flex flex-col justify-center">
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-flipUp">
            Your software development partner
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl animate-fadeIn delay-200">
            We are one of the Top Rated Mobile Application Development Company in India
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 border border-gray-500 text-white rounded-full hover:bg-gray-800 transition-colors text-sm md:text-base font-medium animate-fadeLeft delay-400"
          >
            View Portfolio
          </Link>
          <h1 className="text-md md:text-lg text-gray-400 font-medium animate-fadeIn delay-600">
            AI-Driven Solutions | Mobile | Full Stack | WEB | IOT
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="hidden md:flex w-1/2 h-full">
        <img
          src="/images/slide1.jpg"
          alt="Technology illustration"
          className="w-full h-full object-cover animate-fadeIn"
        />
      </div>
    </div>

    {/* Slide 2 */}
    <div className="flex-shrink-0 w-full flex flex-col md:flex-row-reverse items-center px-6 md:px-16 py-12 md:py-20">
      {/* Right Text */}
      <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-12 flex flex-col justify-center">
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-flipUp">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl animate-fadeIn delay-200">
            Comprehensive digital solutions tailored to your business needs
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 border border-gray-500 text-white rounded-full hover:bg-gray-800 transition-colors text-sm md:text-base font-medium animate-fadeLeft delay-400"
          >
            Explore Services
          </Link>
          <div className="grid grid-cols-2 gap-3 text-gray-400 text-sm animate-fadeIn delay-600">
            <span>→ Mobile Apps</span>
            <span>→ Web Development</span>
            <span>→ AI/ML Solutions</span>
            <span>→ Cloud Services</span>
          </div>
        </div>
      </div>

      {/* Left Image */}
      <div className="hidden md:flex w-1/2 h-full">
        <img
          src="/images/techs.png"
          alt="Technology services"
          className="w-full h-full object-cover animate-fadeIn"
        />
      </div>
    </div>

    {/* Slide 3 */}
    <div className="flex-shrink-0 w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-12 md:py-20">
      {/* Left */}
      <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-12 flex flex-col justify-center">
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-flipUp">
            Top Rated Mobile App Development
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl animate-fadeIn delay-200">
            Customized mobile applications to enhance interactive communication
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 border border-gray-500 text-white rounded-full hover:bg-gray-800 transition-colors text-sm md:text-base font-medium animate-fadeLeft delay-400"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Right - Devices */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <img
          src="/images/hero-tech-3.jpg"
          alt="Mobile background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex gap-6 md:gap-12 animate-fadeIn delay-400">
          <img src="/images/Iphone.png" alt="iPhone" className="h-32 md:h-48" />
          <img src="/images/Android.png" alt="Android" className="h-32 md:h-48" />
        </div>
      </div>
    </div>
  </div>

  {/* Controls */}
  <button
    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-white transition-colors"
    onClick={scrollPrev}
  >
    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
  </button>
  <button
    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-white transition-colors"
    onClick={scrollNext}
  >
    <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
  </button>

  {/* Mobile Scroll Hint */}
  <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center z-20">
    <div className="bg-gray-700 bg-opacity-50 rounded-full p-2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-white" />
    </div>
  </div>
</div>

    </>
  );
};

export default Carousel;