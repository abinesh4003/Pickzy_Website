// components/ClientWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import AOSInit from '@/components/AOSInit';
import ScrollToTop from '@/components/scrollToTop';
import { Toast } from '@/components/ui/toast';
import Header from '@/components/Header';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <AOSInit />
      <div key={pathname}>
        {children}
      </div>
      <ScrollToTop />
      <Toast />
    </div>
  );
}
