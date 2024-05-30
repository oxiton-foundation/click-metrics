import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import HeroImg from "../../assets/n4.png";
import { fadeIn, fadeIn4 } from '@/Motion/variants';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); 

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col items-center mt-[10%] sm:mt-0">
      <section className="flex flex-col md:flex-row justify-between w-[95%] items-center mx-auto mt-[5%]">
        <motion.div 
          className="w-full md:w-[45%] flex flex-col items-start md:items-start sm:text-center md:text-left mb-4 md:mb-0" 
          variants={fadeIn(2.2)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.7}}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:mb-2 mb-0">
            Building stronger digital
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-purple-500">
            connections
          </h1>
          <h3 className="scroll-m-20 text-xl tracking-tight shadow-xs mb-4 sm:mb-0">
            Use our URL shortener, QR Codes, and Link-in-bio pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the 'Click-Matrics' Platform.
          </h3>
          <Button variant="default" className='mt-2 mb-2 sm:mb-0 sm:mt-8 w-[8rem] py-4'>Get Started</Button>
        </motion.div>
        <motion.div 
          variants={fadeIn4(2.2)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.7}} 
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <img src={HeroImg} className="w-full h-auto max-h-[30rem] mx-auto shadow-lg shadow-slate-500" />
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
