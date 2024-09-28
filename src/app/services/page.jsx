'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdPhoneIphone, MdLaptopMac, MdPalette, MdCode, MdSearch, MdCampaign } from 'react-icons/md'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    { Icon: MdPhoneIphone, title: 'Responsive Designs', description: 'Crafting responsive designs for optimal user experience', color: 'var(--skin-color)' },
    { Icon: MdLaptopMac, title: 'Data Structures & Algorithms', description: 'Learn Data Structures & Algorithms for strong programming foundation.', color: 'var(--skin-color)' },
    { Icon: MdPalette, title: 'Web Design', description: 'Designing stunning websites for businesses and individuals alike.', color: 'var(--skin-color)' },
    { Icon: MdCode, title: 'Full Stack Development', description: 'Building full-stack web applications with latest tools and technologies', color: 'var(--skin-color)' },
    { Icon: MdSearch, title: 'SEO', description: 'Optimizing websites to improve search engine rankings and visibility.', color: 'var(--skin-color)' },
    { Icon: MdCampaign, title: 'Digital Marketing', description: 'Driving growth with effective digital marketing strategies and campaigns', color: 'var(--skin-color)' },
  ]

  return (
    <motion.section 
      className="services-section bg-[var(--bg-black-900)] min-h-screen py-20 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-[var(--text-black-900)] text-center mb-4"
          variants={itemVariants}
        >
          Services
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-skin-color mx-auto mb-12"
          variants={itemVariants}
        ></motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-item bg-[var(--bg-black-100)] rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300, damping: 10 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="p-8">
                <motion.div 
                  className="icon text-5xl mb-6"
                  style={{ color: service.color }}
                  animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.Icon />
                </motion.div>
                <h3 className="text-2xl font-semibold text-[var(--text-black-900)] mb-4">{service.title}</h3>
                <p className="text-[var(--text-black-700)]">{service.description}</p>
              </div>
              <motion.div 
                className="h-1" 
                style={{ backgroundColor: service.color }}
                initial={{ scaleX: 0 }}
                animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services