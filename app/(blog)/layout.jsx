import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AppLayout({children}) {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl px-1 sm:px-4'>{children}</main>
      <Footer />
    </>
  )
}
