'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun, FiSettings } from "react-icons/fi"

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export default function StyleSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const dialogRef = useRef(null)

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') !== 'false'
    setIsDarkMode(darkMode)
    document.documentElement.classList.toggle('light', !darkMode)

    const handleOutsideClick = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const toggleStyleSwitcher = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    document.documentElement.classList.toggle('light', !newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  const setActiveStyle = (color) => {
    document.documentElement.style.setProperty('--skin-color', color)
    document.documentElement.style.setProperty('--hover-color', color)
  }

  return (
    <motion.div
      className={`fixed bottom-4 right-4 z-50`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <button
        onClick={toggleStyleSwitcher}
        className="bg-skin-color text-white p-4 rounded-full shadow-lg text-2xl"
        aria-label="Toggle style switcher"
      >
        <FiSettings className="animate-spin-slow" />
      </button>
      {isOpen && (
        <div ref={dialogRef} className="mt-2 p-4 bg-[var(--bg-black-100)] border border-[var(--bg-black-50)] rounded-lg shadow-lg">
          <div className="relative flex w-fit items-center rounded-full mb-4">
            <button
              className={`${TOGGLE_CLASSES} ${
                isDarkMode ? "text-[var(--text-black-900)]" : "text-[var(--text-black-700)]"
              }`}
              onClick={toggleDarkMode}
            >
              <FiMoon className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10">Dark</span>
            </button>
            <button
              className={`${TOGGLE_CLASSES} ${
                !isDarkMode ? "text-[var(--text-black-900)]" : "text-[var(--text-black-700)]"
              }`}
              onClick={toggleDarkMode}
            >
              <FiSun className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10">Light</span>
            </button>
            <div
              className={`absolute inset-0 z-0 flex ${
                isDarkMode ? "justify-start" : "justify-end"
              }`}
            >
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-skin-color"
              />
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-[var(--text-black-900)]">Theme Colors</h4>
          <div className="colors flex space-x-2">
            <span className="w-6 h-6 bg-[#ec1839] rounded-full cursor-pointer" onClick={() => setActiveStyle('#ec1839')}></span>
            <span className="w-6 h-6 bg-[#fa5b0f] rounded-full cursor-pointer" onClick={() => setActiveStyle('#fa5b0f')}></span>
            <span className="w-6 h-6 bg-[#37b182] rounded-full cursor-pointer" onClick={() => setActiveStyle('#37b182')}></span>
            <span className="w-6 h-6 bg-[#1854b4] rounded-full cursor-pointer" onClick={() => setActiveStyle('#1854b4')}></span>
            <span className="w-6 h-6 bg-[#f021b2] rounded-full cursor-pointer" onClick={() => setActiveStyle('#f021b2')}></span>
          </div>
        </div>
      )}
    </motion.div>
  )
}