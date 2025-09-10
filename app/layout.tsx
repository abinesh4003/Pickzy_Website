import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientWrapper from '@/app/ClientWrapper';
import Script from 'next/script';
import VoiceAssistant from '@/components/voiceassistant/VoiceAssistant';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pickzy.com'),
  title: {
    default: 'PickZy - Software Development & Digital Solutions',
    template: '%s | PickZy',
  },
  description:
    'Leading software development company providing custom solutions, mobile apps, web development, and digital transformation services.',
  icons: {
    icon: '/favicon.ico',
  },
};

// Extend the JSX namespace to include custom elements
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'elevenlabs-convai': React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement> & {
//           'agent-id'?: string;
//         },
//         HTMLElement
//       >;
//     }
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tawk Chat */}
        <Script
          strategy="afterInteractive"
          id="tawk-script"
          dangerouslySetInnerHTML={{
            __html: `
              var $_Tawk_API={},$_Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5522523aa329e2c841f9fa57/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        {/* ElevenLabs Convai Widget
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
        <VoiceAssistant/>

        {/* Widget element with proper TypeScript handling
        <elevenlabs-convai agent-id="agent_8501k3te3tbaev3tvgs2fb0k9jhp"></elevenlabs-convai> */}
      </body>
    </html>
  );
}