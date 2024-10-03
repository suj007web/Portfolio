'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setIsError(false)

    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json();
      console.log('API response:', result);

      if (response.ok && result.success) {
        setSubmitMessage('Thank you for your message! Check your email for a confirmation.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsError(false)
      } else {
        const errorMessage = result.error || 'Unknown error occurred';
        console.error('Error from API:', errorMessage);
        setSubmitMessage(`There was an error sending your message: ${errorMessage}`)
        setIsError(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage(`There was an error sending your message: ${error.message || 'Unknown error'}`)
      setIsError(true)
    }

    setIsSubmitting(false)
  }

  return (
    <AnimatedSection className="contact section" id="contact">
      <Toaster />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-skin-color">Get in Touch</h2>
        <div className="max-w-4xl mx-auto bg-[var(--bg-black-100)] rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ContactInfoItem 
              icon={FaPhone} 
              title="Phone" 
              content="8708224833" 
              link="tel:+918708224833"
            />
            <ContactInfoItem 
              icon={FaMapMarkerAlt} 
              title="Location" 
              content="Delhi, India" 
              link="https://www.google.com/maps/place/Delhi,+India"
            />
            <ContactInfoItem 
              icon={FaEnvelope} 
              title="Email" 
              content="chauhansujal1107@gmail.com" 
              link="mailto:chauhansujal1107@gmail.com"
            />
            <ContactInfoItem 
              icon={FaGlobe} 
              title="Website" 
              content="www.sujalchauhan.in" 
              link="https://www.sujalchauhan.in"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--text-black-900)]">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput name="name" value={formData.name} onChange={handleChange} />
              <FormInput name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
            <FormInput name="subject" value={formData.subject} onChange={handleChange} />
            <div className="form-item">
              <textarea 
                className="w-full p-4 bg-[var(--bg-black-50)] border border-[var(--bg-black-100)] rounded-lg focus:outline-none transition-all text-[var(--text-black-900)]"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <div className="form-item text-center">
              <button 
                type="submit" 
                className="btn bg-skin-color text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitMessage && (
              <div className={`text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}

function ContactInfoItem({ icon: Icon, title, content, link }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(content).then(() => {
      toast.success(`${title} copied to clipboard!`, {
        duration: 2000,
        position: 'bottom-center',
      });
    });

    if (isMobile || (title !== 'Phone' && title !== 'Email')) {
      setTimeout(() => {
        window.open(link, '_blank', 'noopener,noreferrer');
      }, 100);
    }
  };

  return (
    <a 
      href={isMobile || (title !== 'Phone' && title !== 'Email') ? link : '#'}
      className="contact-info-item flex items-center bg-[var(--bg-black-50)] p-4 rounded-lg hover:bg-[var(--bg-black-100)] transition-all duration-300"
      onClick={handleClick}
      {...(isMobile || (title !== 'Phone' && title !== 'Email') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="icon text-3xl text-skin-color mr-4">
        <Icon />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[var(--text-black-900)]">{title}</h4>
        <p className="text-[var(--text-black-700)] text-xs md:text-base">{content}</p>
      </div>
    </a>
  )
}

function FormInput({ name, type = "text", value, onChange }) {
  return (
    <div className="form-item">
      <input 
        type={type} 
        className="w-full p-4 bg-[var(--bg-black-50)] border border-[var(--bg-black-100)] rounded-lg focus:outline-none transition-all text-[var(--text-black-900)]"
        name={name}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}