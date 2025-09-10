/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pickzy.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  // 👇 This adds freshness automatically
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(), // 👈 freshness
    }
  },
};
