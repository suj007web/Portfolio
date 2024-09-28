'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedSection, { itemVariants } from '../../components/AnimatedSection'

export default function About() {
  const [activeTimelineItems, setActiveTimelineItems] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const animateTimeline = async () => {
      await controls.start({ scaleY: 1, transition: { duration: 2 } });
      for (let i = 0; i < timelineItems.length; i++) {
        setActiveTimelineItems(prev => [...prev, i]);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    };

    animateTimeline();
  }, [controls]);

  return (
    <AnimatedSection className="about section" id="about">
      <div className="container mx-auto px-4">
        <motion.div className="section-title mb-12 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-skin-color">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="about-content" variants={itemVariants}>
            <div className="about-text bg-[var(--bg-black-100)] p-6 rounded-lg shadow-lg">
              <motion.h3 className="text-2xl font-semibold mb-4" variants={itemVariants}>
                I&apos;m Sujal Chauhan, a <span className="text-skin-color">Full Stack Web Developer</span>
              </motion.h3>
              <motion.p className="text-[var(--text-black-700)] mb-4" variants={itemVariants}>
              I&apos;m Sujal Chauhan, a Full Stack Web Developer and Software Engineer. With a passion for web development since my teenage years, I specialize in creating efficient, scalable applications. I also share my knowledge through educational content, helping others explore the potential of the web.


              </motion.p>
              <motion.p className="text-[var(--text-black-700)]" variants={itemVariants}>
              When I&apos;m not coding, I enjoy outdoor adventures and spending time with family and friends. Thanks for stopping by—I look forward to working with you!


              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="skills bg-[var(--bg-black-100)] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-skin-color">My Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 bg-[var(--bg-black-50)] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-skin-color text-center">My Journey</h3>
          <div className="relative">
            <div className="absolute left-0 w-0.5 bg-gray-200 h-full"></div>
            <motion.div 
              className="absolute left-0 w-0.5 bg-skin-color origin-top"
              initial={{ scaleY: 0 }}
              animate={controls}
              style={{ height: '100%' }}
            ></motion.div>
            <ul className="space-y-16">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  {...item}
                  isActive={activeTimelineItems.includes(index)}
                  isLast={index === timelineItems.length - 1}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

function SkillBar({ skill, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-[var(--text-black-900)]">{skill}</span>
        <span className="text-sm font-medium text-[var(--text-black-700)]">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-skin-color h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.9, delay: 0 }}
        ></motion.div>
      </div>
    </div>
  )
}

function TimelineItem({ date, title, body, isActive, isLast }) {
  return (
    <li className="relative pl-6">
      <div className="absolute left-0 top-1.5 transform -translate-x-1/2">
        <motion.div 
          className={`w-5 h-5 rounded-full border-2 ${isActive ? 'bg-skin-color border-skin-color' : 'bg-gray-200 border-white'}`}
          initial={false}
          animate={{ scale: isActive ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        className={`${isLast ? '' : 'mb-8'}`}
      >
        <time className="mb-1 text-sm font-normal leading-none text-skin-color">{date}</time>
        <h3 className="text-lg font-semibold text-[var(--text-black-900)]">{title}</h3>
        <p className="text-base font-normal text-[var(--text-black-700)]">{body}</p>
      </motion.div>
    </li>
  )
}

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript/React", level: 80 },

  { name: "Node.js/Express", level: 70 },
  { name: "TypeScript", level: 50 },
  { name: "Next.js", level: 40 },
];

const timelineItems = [
  {
    date: "2019-2022",
    title: "Sunrise Internatonal School",
    body: "I attended Sunrise International School, excelling academically with 96% in 10th and 94% in 12th board exams, while gaining essential life skills and a solid foundation.",
  },
  {
    date: "2022-Present",
    title: "Maharaja Agarsen Institute Of Technology",
    body: "I'm pursuing Information Technology at MAIT, focusing on full-stack development, DSA, and gaining hands-on experience on various frameworks",
  }
];