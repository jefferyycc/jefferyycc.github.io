'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

export default function Experience() {
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
      id="experience"
      className="py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-lg text-stone leading-relaxed mb-12"
        >
          I build systems with a backend and infrastructure bias, with most of
          my recent work focused on reliability, internal tooling, and
          operational clarity at scale.
        </motion.p>

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
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="pl-6 relative"
            >
              <div className="absolute -left-[9px] top-[3px] w-[18px] h-[18px] bg-terracotta rounded-full z-10" />
              {index < experience.length - 1 && (
                <div className="absolute left-0 top-[21px] bottom-[-2rem] w-0.5 bg-terracotta" />
              )}
              <h3 className="text-xl font-semibold text-charcoal">
                {job.role}
              </h3>
              <div className="flex flex-col gap-1 mb-4 md:flex-row md:items-baseline md:justify-between">
                <p className="text-terracotta font-medium">{job.company}</p>
                <p className="text-stone text-sm">{job.dates}</p>
              </div>
              <ul className="space-y-3 mb-4">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm md:text-base text-stone leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {'skills' in job && job.skills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {(job.skills as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-light-accent text-charcoal text-xs font-medium px-3 py-1 rounded-full border border-stone/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
