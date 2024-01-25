export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://egxblog.vercel.app/sitemap.xml",
  };
}
