import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/app/context/ThemeContext";
import ClientThemeWrapper from "@/app/context/ClientThemeWrapper";
import NavBar from "@/app/components/NavBar";
import FooTer from "@/app/components/FooTer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "egxblog",
  description: "My first blog + other things.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body>
        <ThemeProvider>
          <ClientThemeWrapper>
            <NavBar />
            <main className="min-h-screen flex flex-col">{children}</main>
            <FooTer />
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
