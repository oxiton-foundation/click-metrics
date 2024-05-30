import { AccordionUtil } from '../components/AccordionUtil'

const Faq = () => {
  return (
    <>
    <section className="w-full mt-16">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-11/12 md:w-2/3 lg:w-1/2 mx-auto sm:text-center text-left mb-8">
        Frequently Asked Questions
      </h2>
      <AccordionUtil />
    </section>
    </>
  )
}

export default Faq
