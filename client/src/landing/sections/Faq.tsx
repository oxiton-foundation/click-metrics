"use client"
import { motion } from 'framer-motion'
import { AccordionUtil } from '../components/AccordionUtil'
import { fadeIn2 } from '@/Motion/variants'

const Faq = () => {
  return (
    <>
    <motion.section variants={fadeIn2(1.5)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="w-full mt-24">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-11/12 md:w-2/3 lg:w-1/2 mx-auto sm:text-center text-left mb-8">
        Frequently Asked Questions
      </h2>
      <AccordionUtil />
    </motion.section>
    </>
  )
}

export default Faq
