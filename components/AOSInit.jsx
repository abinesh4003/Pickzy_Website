'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Safe check for window in client-side only
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-quad',
        once: false,
        mirror: true,
        offset: 100,
        anchorPlacement: 'top-bottom',
        disable: window.innerWidth < 768, // Disable on mobile safely
      });

      // Force refresh after init
      AOS.refresh();

      const handleResize = () => {
        AOS.refreshHard();
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]); // Re-initialize on every route change

  return null;
}
