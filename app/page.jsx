import Hero from './hero'
import Bio from './bio'
import ServiceColumn from './component/Columns'
import Testimonial from './component/Testimonials'


export default function Home() {
  return (
    <>
    <main className='font-inter'>
      <Hero />
      <div className='bg-accent-1 text-center flex'>
        <div>
          {/* image */}
        </div>
        <div className='p-10'>
        <h2 className='  text-3xl md:text-4xl font-semibold text-white py-2'>Kick Start Your Fitness Journey</h2>
        <p className=' text-white md:text-lg py-4 md:py-6'>
        Johnny is an ACE Certified Personal Trainer and Precision Nutrition Certified Nutrition Coach based in Vancouver, BC. Johnny specialize in tailoring workout and nutrition plans to help you reach your personal fitness goal. With a positive and collabroative approach, Johnny will help you incorporate fitness and nutrition into your day-to-day life. 
        </p>
        </div>
      </div>
      <ServiceColumn />
      <Testimonial />
    </main>
    </>
  )
}
