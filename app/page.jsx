import Hero from './hero'
import Bio from './bio'
import ServiceColumn from './component/Columns'
import Testimonial from './component/Testimonials'
import Introduction from './component/Introduction'
import Contact from './contact/page'

export default function Home() {
  return (
    <>
    <main className='font-inter bg-accent-4'>
      <Hero />
      <Introduction />
      <ServiceColumn />
      <Testimonial />
      {/* <Contact /> */}
    </main>
    </>
  )
}
