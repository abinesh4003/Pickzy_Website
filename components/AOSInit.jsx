'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    // Initialize AOS with custom configuration
    AOS.init({
      duration: 800,               // Animation duration (ms)
      easing: 'ease-out-quad',     // Easing function
      once: false,                 // Whether animation should happen only once
      mirror: true,                // Whether elements should animate out while scrolling past them
      offset: 100,                 // Offset (px) from the original trigger point
      anchorPlacement: 'top-bottom', // Defines which position triggers the animation
      disable: window.innerWidth < 768 // Disable on mobile if needed
    });

    // Refresh AOS when window is resized
    const handleResize = () => {
      AOS.refreshHard(); // Force recalculate all positions
    };

    // Add event listeners
    window.addEventListener('load', AOS.refresh);
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('load', AOS.refresh);
      window.removeEventListener('resize', handleResize);
      AOS.refreshHard(); // Final refresh before unmounting
    };
  }, []);

  return null;
}