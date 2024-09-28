'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypingAnimation() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["", "Frontend Developer", "Backend Developer", "Tutor", "Youtuber"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={el} className="text-skin-color"></span>
}