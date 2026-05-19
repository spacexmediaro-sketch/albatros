/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://albatrosa.ro",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/api", "/garaj"] },
    ],
  },
  exclude: ["/admin/*", "/api/*", "/garaj/*"],
};
