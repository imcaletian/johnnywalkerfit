import { Inter } from 'next/font/google'
import Hero from './hero'
import Bio from './bio'
import ServiceColumn from './component/Columns'
import Testimonial from './component/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceColumn />
      <Testimonial />
    </main>
  )
}
