'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const [featuredProject, ...otherProjects] = projects

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-cream scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-lg text-stone leading-relaxed mb-12"
        >
          A few selected projects that reflect how I think about product,
          systems, and practical AI work.
        </motion.p>

        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-8 lg:grid-cols-[1.25fr,0.85fr] rounded-[2rem] border border-stone/20 bg-light-accent/80 p-8 md:p-10 mb-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                  Featured
                </span>
                <span className="text-sm font-medium text-stone">
                  {featuredProject.year}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold text-charcoal mb-2">
                {featuredProject.name}
              </h3>

              {featuredProject.subtitle && (
                <p className="text-lg font-medium text-terracotta mb-4">
                  {featuredProject.subtitle}
                </p>
              )}

              <p className="text-lg text-stone leading-relaxed mb-5">
                {featuredProject.description}
              </p>

              <p className="text-charcoal leading-relaxed mb-4">
                {featuredProject.role}
              </p>

              <p className="text-stone leading-relaxed mb-6">
                {featuredProject.impact}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-cream text-charcoal text-xs font-medium px-3 py-1 rounded-full border border-stone/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {'demoUrl' in featuredProject && featuredProject.demoUrl && (
                <a
                  href={featuredProject.demoUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream hover:bg-terracotta transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch demo
                </a>
              )}
            </div>

            <div className="rounded-[1.5rem] bg-cream/80 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone mb-4">
                Highlights
              </p>
              <ul className="space-y-4">
                {featuredProject.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-charcoal leading-relaxed"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {otherProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="bg-light-accent rounded-[1.75rem] p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal">
                    {project.name}
                  </h3>
                  {project.subtitle && (
                    <p className="text-terracotta font-medium">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <span className="text-stone text-sm font-medium">
                  {project.year}
                </span>
              </div>

              <p className="text-stone leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="space-y-5 mb-6">
                <p className="text-charcoal leading-relaxed">
                  {project.role}
                </p>

                <p className="text-stone leading-relaxed">
                  {project.impact}
                </p>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone mb-2">
                    Highlights
                  </p>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-charcoal leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-cream text-charcoal text-xs font-medium px-3 py-1 rounded-full border border-stone/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
