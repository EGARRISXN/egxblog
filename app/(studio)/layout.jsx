import '../globals.css'

export const metadata = {
  title: 'Sanity Studio!',
  description: 'Studio for editing Sanity.io content',
}

export default function StudioLayout({children}) {
  return (
    <html lang='en' className='h-screen max-h-screen overflow-auto overscroll-none antialiased'>
      <body>{children}</body>
    </html>
  )
}
