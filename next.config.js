/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
   async redirects() {
    return [
      {
  source: '/:path(ios-apps-development|android-apps-development|windows-apps-development)',
  destination: '/mobile-development',
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
      }
    ];
  },
};

module.exports = nextConfig;
