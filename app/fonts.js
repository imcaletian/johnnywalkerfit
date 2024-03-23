import { Inter, Dela_Gothic_One, Poppins } from 'next/font/google'

export const inter = Inter({ 
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',

  })
export const dela = Dela_Gothic_One({ 
    subsets: ['latin'], 
    weight: "400",
    variable: '--font-dela',
    display: 'swap',

  })
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: '--font-poppins',
    display: 'swap',
  })
