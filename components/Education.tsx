'use client'

import { motion } from 'framer-motion'
import { education } from '@/lib/data'

export default function Education() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="education"
      className="py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-8"
        >
          Education
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="pl-6 relative"
            >
              {/* Dot centered at top of entry */}
              <div className="absolute -left-[9px] top-[3px] w-[18px] h-[18px] bg-stone rounded-full z-10" />
              {/* Bar starts from bottom of dot, bridges gap to next entry */}
              {index < education.length - 1 && (
                <div className="absolute left-0 top-[21px] bottom-[-2rem] w-0.5 bg-stone" />
              )}
              <h3 className="text-xl font-semibold text-charcoal">
                {edu.degree}
              </h3>
              <p className="text-terracotta font-medium">{edu.institution}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
