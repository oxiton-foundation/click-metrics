import React from 'react'
import { TestimonialUtil } from '../components/TestimonialUtil'

const Testimonial = () => {
  return (
    <main className='w-[100%] flex justify-center items-center'>
        <section className='w-[90%] text-center mt-[5%]'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      What Click-Mate user speak about it ?
    </h2>
        <TestimonialUtil />
        </section>
    </main>
  )
}

export default Testimonial