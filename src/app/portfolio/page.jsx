'use client'

import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from '../../components/AnimatedSection'

export default function Portfolio() {
  const portfolioItems = [
    { image: '/images/portfolio/portfolio1.png' },
    { image: '/images/portfolio/portfolio2.png' },
    { image: '/images/portfolio/portfolio3.png' },
    { image: '/images/portfolio/portfolio4.png' },
    { image: '/images/portfolio/portfolio5.png' },
  ]

  return (
    <AnimatedSection className="portfolio section" id="portfolio">
      <div className="container mt-10 mx-auto">
        <motion.div className="section-title" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
        </motion.div>
        <motion.div className="row" variants={itemVariants}>
          <div className="portfolio-heading mb-8">
            <h2 className="text-2xl font-semibold">My Last Projects:</h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <div className="portfolio-item-inner shadow-md rounded-lg overflow-hidden">
                <div className="portfolio-img">
                  <motion.img 
                    src={item.image} 
                    alt={`Portfolio item ${index + 1}`} 
                    className="w-full h-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}