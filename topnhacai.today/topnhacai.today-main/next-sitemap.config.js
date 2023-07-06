const siteUrl = "https://topnhacai.today/";
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "admin.topnhacai.today", "/readme.html", "system.topnhacai.today"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}sitemap.xml`,
      `${siteUrl}post-sitemap.xml`,
    ],
  },
};
