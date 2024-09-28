'use client'

import { motion } from 'framer-motion'
import TypingAnimation from '../components/TypingAnimation'
import AnimatedSection, { itemVariants } from '../components/AnimatedSection'

export default function Home() {
  return (
    <AnimatedSection className="min-h-screen flex items-center mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <motion.div className="w-full lg:w-1/2 mb-8 lg:mb-0" variants={itemVariants}>
            <motion.h3 className="text-3xl mb-4" variants={itemVariants}>
              Hello, my name is <span className="font-clicker-script text-4xl text-skin-color">Sujal Chauhan</span>
            </motion.h3>
            <motion.h3 className="text-3xl mb-4" variants={itemVariants}>
              I&apos;m a <TypingAnimation />
            </motion.h3>
            <motion.p className="text-[var(--text-black-700)] mb-6" variants={itemVariants}>
            Welcome to my portfolio!
            As a full-stack web developer and software engineer, I deliver high-quality, scalable solutions. Let’s collaborate to create customized websites, applications, and digital platforms that exceed your expectations and drive business success.
            </motion.p>
            <motion.a 
              href="https://drive.google.com/file/d/1rfMm6GQp-o5XKOfdmhVCL9W0zQ0G_t7J/view?usp=drive_link" 
              className="btn inline-block px-6 py-3 bg-skin-color text-white rounded-full transition-transform hover:scale-105"
              variants={itemVariants}
            >
              Download CV
            </motion.a>
          </motion.div>
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <div className="relative max-w-md mx-auto">
              <motion.img 
                src="/images/suj.img.jpg" 
                alt="Sujal Chauhan" 
                className="rounded-lg shadow-lg w-full"
                variants={itemVariants}
              />
              <div className="absolute -right-4 -bottom-4 h-20 w-20 border-b-4 border-r-4 border-skin-color"></div>
              <div className="absolute -left-4 -top-4 h-20 w-20 border-t-4 border-l-4 border-skin-color"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}