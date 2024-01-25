import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/Theme-Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://egxblog.vercel.app/"),
  title: "EG. | Blog",
  description: "The Official Blog for Ethan G.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ethan_g, eg, EG., Ethan G., ethan-g, egarrisxn, egxblog, ethan garrison, ethan-garrison, ethan_garrison, ethan-garrison, blog, nextjs, shadcn-ui, tailwindcss, javascript, reactjs",
  ],
  creator: { name: "Ethan Garrison", url: "https://github.com/EGARRISXN" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "EG. | Blog",
    description: "The Official Blog for Ethan G",
    url: "https://egxblog.vercel.app/",
    siteName: "egxblog.vercel.app",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@e____g_______",
    site: "@e____g_______",
    title: "EG. | Blog",
    description: "The Official Blog for Ethan G",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="x">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
