import React from 'react'
import { TestimonialUtil } from '../components/TestimonialUtil'
import { motion } from 'framer-motion'
import { fadeIn} from '@/Motion/variants'

const Testimonial = () => {
  return (
    <main className='w-[100%] flex justify-center items-center py-16 sm:py-0 sm:mt-8 '>
        <motion.section variants={fadeIn(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[90%] text-center mt-[5%]'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      What Click Matrics user speak about it ?
    </h2>
        <TestimonialUtil />
        </motion.section>
    </main>
  )
}

export default Testimonial