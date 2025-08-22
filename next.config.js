/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },



 async rewrites() {
    return [
      {
        source: "/mobile-apps-development",          // URL user visits
        destination: "/services/mobile-apps-development", // actual folder route
      },
      {
        source: "/web-development",         
        destination: "/services/web-development",
      },
      {
        source: "/design-and-markup",         
        destination: "/services/design-and-markup",
      },
      {
        source: "/internet-marketing",         
        destination: "/services/internet-marketing",
      },
      {
        source: "/digital-transformation",         
        destination: "/services/digital-transformation",
      },
      {
        source: "/custom-software-development",         
        destination: "/services/custom-software-development",
      },
      {
        source: "/desktop-application-development",         
        destination: "/services/desktop-application-development",
      },
      {
        source: "/cloud",         
        destination: "/services/cloud",
      }

    ];
  },


   async redirects() {
    return [
      
      {
      source: '/:path(ios-apps-development|android-apps-development|windows-apps-development)',
      destination: '/mobile-apps-development',
      permanent: true,
    },
    
      {
        source: '/:path(php-web-development|ror-web-development|wordpress-web-development|magento-web-development|drupal-web-development|joomla-web-development)',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/:path(web-design|logo-design|psd-to-html)',
        destination: '/design-and-markup',
        permanent: true,
      },
          {
        source: '/:path(seo-services|search-engine-marketing|social-media-marketing)',
        destination: '/internet-marketing',
        permanent: true,
      },
      {
        source: '/our-process',
        destination: '/services',
        permanent: true,
      },
       {
        source: "/service/mobile",  
        destination: "/mobile",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
