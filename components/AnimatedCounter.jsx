// components/AnimatedCounter.tsx
'use client';

import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ 
  value = "300+", // Default value with +
  duration = 2 ,
  classname="text-4xl font-bold text-orange-500"
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Extract the numeric part and the suffix
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(numericValue.toString(), ''); // Gets the "+" or other symbols

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${numericValue}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div id={`counter-${numericValue}`} className={classname}>
      {shouldAnimate ? (
        <CountUp 
          end={numericValue}
          duration={duration}
          suffix={suffix}
        />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
}