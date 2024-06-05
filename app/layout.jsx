import './globals.css'
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {Analytics} from '@vercel/analytics/react'
import {ThemeProvider} from './providers'

export const metadata = {
  metadataBase: new URL('https://www.egxblog.net/'),
  title: 'EG | Blog',
  description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ethan_g, eg, EG, ethan-g, egarrisxn, egxblog, ethangarrison, ethan-garrison, ethan_garrison, blog, nextjs, next, next14, sanity, sanityio, shadcn-ui, shadcn/ui, tailwindcss, javascript, react',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/egarrisxn'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'EG. | Blog',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    url: 'https://www.egxblog.net/',
    siteName: 'egxblog.net',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: 'eg_xo_',
    site: 'https://twitter.com/eg_xo_',
    title: 'EG. | Blog',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
  },
}

export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
