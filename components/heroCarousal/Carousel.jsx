"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  // Initialize AOS and set up carousel events
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const onSelect = () => {
      AOS.refreshHard(); // Force refresh animations on slide change
    };

    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div 
      className="relative w-full overflow-hidden" 
      ref={emblaRef} 
      style={{ height: 'calc(100vh - var(--navbar-height))' }}
    >
      <div className="flex h-full">
        {/* Slide 1 */}
        <div className="flex-shrink-0 w-full bg-gray-900 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="w-full max-w-6xl mx-auto text-center px-4">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              data-aos="flip-up"
            >
              Your software development partner
            </h2>
            <p className="text-orange-400 text-lg md:text-xl mb-6" data-aos="fade-up">
              We are one of the Top Rated Mobile Application Development Company in India
            </p>
            <p className="mb-6 md:mb-8" data-aos="fade-left">
              <Link
                href="/portfolio" 
                className="inline-block px-4 py-2 border-2 border-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm md:text-base"
              >
                View Portfolio
              </Link>
            </p>
            <h1 
              className="text-lg md:text-xl text-gray-300 font-bold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Al-Driven Solutions | Mobile | Full Stack | WEB | IOT
            </h1>
          </div>

          <div className="w-full max-w-6xl mx-auto mt-8 md:mt-12 relative h-[300px] md:h-[400px]">
            {/* Desktop Images */}
            <div className="hidden md:block relative w-full h-full">
              <img
                src="/images/Left2.png"
                alt="Left 2"
                className="absolute left-[0%] top-[20%] h-[120px] md:h-[160px] object-contain"
                data-aos="fade-right"
              />
              <img
                src="/images/Left1.png"
                alt="Left 1"
                className="absolute left-[10%] top-[10%] h-[140px] md:h-[180px] object-contain"
                data-aos="fade-right"
                data-aos-delay="100"
              />
              <img
                src="/images/Center.png"
                alt="Center"
                className="absolute left-[20%] top-[-5%] h-[160px] md:h-[200px] object-contain"
                data-aos="fade-up"
              />
              <img
                src="/images/Right2.png"
                alt="Right 1"
                className="absolute right-[20%] bottom-[0] h-[160px] md:h-[200px] object-contain"
                data-aos="fade-left"
                data-aos-delay="100"
              />
              <img
                src="/images/Right3.png"
                alt="Right 2"
                className="absolute right-[15%] bottom-[10%] h-[140px] md:h-[180px] object-contain"
                data-aos="fade-left"
                data-aos-delay="200"
              />
              <img
                src="/images/Right5.png"
                alt="Right 3"
                className="absolute right-[5%] bottom-[25%] h-[120px] md:h-[160px] object-contain"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
            
            {/* Mobile Image */}
            <div className="md:hidden flex justify-center items-center h-full">
              <img
                src="/images/Responsiveslide.png"
                alt="Responsive slide"
                className="h-[200px] object-contain"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex-shrink-0 w-full bg-gray-900 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="w-full max-w-6xl mx-auto text-center px-4">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6"
              data-aos="flip-up"
            >
              Our Services
            </h2>
            <p 
              className="text-gray-300 text-sm md:text-base mb-8 md:mb-12 max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              From web design & web applications, through memorable websites, entertaining mobile apps, 
              to successful marketing strategies, we offer a wide variety of services to satisfy all our clients needs.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4">
            <div className="flex flex-col items-center" data-aos="fade-right">
              <div className="h-32 md:h-48 flex items-center">
                <img src="/images/Strategy.png" alt="Strategy" className="h-24 md:h-40" />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 md:gap-8">
              <div data-aos="fade-up">
                <img src="/images/design.png" alt="Design" className="h-20 md:h-32" />
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <img src="/images/techs.png" alt="Technologies" className="h-20 md:h-32" />
              </div>
            </div>
            
            <div className="flex flex-col items-center" data-aos="fade-left">
              <div className="h-32 md:h-48 flex items-center">
                <img src="/images/Development.png" alt="Development" className="h-24 md:h-40" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex-shrink-0 w-full bg-gray-900 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="w-full max-w-6xl mx-auto text-center px-4">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6"
              data-aos="flip-up"
            >
              We are one of the Top Rated Mobile Application<br className="hidden md:block" />
              Development Company in India
            </h2>
            <p 
              className="text-gray-300 text-base md:text-xl mb-6 md:mb-8"
              data-aos="fade-up"
            >
              <b>Customized mobile application to enhance interactive communication with customers and clients</b>
            </p>
            <p className="mb-8 md:mb-12" data-aos="fade-left">
              <Link
                href="/portfolio" 
                className="inline-block px-4 py-2 border-2 border-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors text-sm md:text-base"
              >
                View Portfolio
              </Link>
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10rem] px-4">
            <div className="flex justify-center md:justify-end gap-4 md:gap-[5rem]" data-aos="fade-right">
              <img src="/images/Iphone.png" alt="iPhone" className="h-40 md:h-64" />
              <img src="/images/Android.png" alt="Android" className="h-40 md:h-64" />
            </div>
            <div className="flex justify-center md:justify-start" data-aos="fade-left">
              <img src="/images/App_Icons.png" alt="App Icons" className="h-40 md:h-64" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-orange-500 transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-orange-500 transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default Carousel;