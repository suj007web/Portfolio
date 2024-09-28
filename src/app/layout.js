'use client'

import '../styles/globals.css'
import Aside from '../components/Aside'
import StyleSwitcher from '../components/StyleSwitcher'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import Head from 'next/head'

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Set the theme color on initial load
    document.documentElement.style.setProperty('--skin-color', '#ec1839')

    // Close the menu when navigation occurs
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Sujal Chauhan's professional portfolio. Discover projects in web development, cloud integration, and software engineering." />
        <meta name="keywords" content="Software Developer, Full-Stack Developer, Web Development, Cloud Integration, React, Next.js, Software Engineering" />
        <meta name="author" content="Sujal Chauhan" />

   
        <title>Sujal Chauhan | Full-Stack Developer Portfolio</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <div className="flex">
        
          <button
            onClick={toggleMenu}
            className="fixed top-4 left-4 z-50 lg:hidden text-[var(--text-black-900)] hamburger-button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
          
          {/* Sidebar for Desktop */}
          <div className="hidden lg:block w-56">
            <Aside />
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 z-40 w-56 bg-[var(--bg-black-100)] shadow-lg lg:hidden pt-16 pl-4 drawer-content"
              >
                <Aside isMobile={true} onClose={() => setIsMenuOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1 p-4 lg:p-6 lg:ml-28">
            {children}
          </main>
          
          {/* Style Switcher Component */}
          <StyleSwitcher />
        </div>
      </body>
    </html>
  )
}
