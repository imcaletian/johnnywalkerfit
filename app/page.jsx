'use client'

import Hero from './hero'
import Bio from './bio'
import ServiceColumn from './component/Columns'
import Testimonial from './component/Testimonials'
import Introduction from './component/Introduction'
import OnlineTraining from './component/Online'
import Contact from './contact/page'
import { animate, motion } from 'framer-motion'

const variants = {
  hidden: {opacity: 0},
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const item = {
  hidden: {
    opacity:0},
  show: {opacity:1,
    transition: {
      delay:0.1,
      duration: 0.8,
    }
  }
}

export default function Home() {
  return (
    <motion.div 
    className='font-inter bg-accent-4'
    variants={variants}
    initial="hidden"
    animate="show"
    >
      <motion.div variants={item} initial='hidden' whileInView="show"><Hero /></motion.div>
      <motion.div variants={item} initial='hidden' whileInView="show"><Introduction /></motion.div>
      <motion.div variants={item} initial='hidden' whileInView="show"><ServiceColumn /></motion.div>
      {/* <OnlineTraining /> */}
      <motion.div variants={item} initial='hidden' whileInView="show"><Testimonial /></motion.div>
      {/* <Contact /> */}
    </motion.div>
  )
}
