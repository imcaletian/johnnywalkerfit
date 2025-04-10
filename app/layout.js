import './globals.css'
import Nav from './nav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import { Inter, Dela_Gothic_One, Poppins, Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import BookingWidget from "./component/YCBM"



const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  weight: "400",
  subsets: ['latin'],
  display: "swap",
  variable: '--font-roboto'
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
  description: 'Johnny is an ACE Certified Personal Trainer and Precision Nutrition Certified Nutrition Coach based in Vancouver, BC.',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${inter.variable} ${dela.variable} ${poppins.variable} ${roboto.variable} bg-slate-900`}>
      <body className='max-w-[90rem]  mx-auto shadow-xl shadow-black font-poppins'>
        <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
        <Nav />
        {children}
        <Footer />
        {/* <BookingWidget/> */}
      </body>
    </html>
  )
}
