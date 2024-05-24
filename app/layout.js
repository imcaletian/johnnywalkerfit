import './globals.css'
import Nav from './nav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import { Inter, Dela_Gothic_One, Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const dela = Dela_Gothic_One({ 
  subsets: ['latin'], 
  weight: "400",
  variable: '--font-dela',
  display: 'swap',

})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
  display: 'swap',

})

export const metadata = {
  title: "Johnny Walker's Fitness",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dela.variable} ${poppins.variable}`}>
      <body className='max-w-[90rem] bg-slate-900 mx-auto shadow-xl shadow-black'>
        <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
        <Nav />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
