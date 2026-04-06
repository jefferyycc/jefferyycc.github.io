'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/lib/data'
import MailtoLink from '@/components/MailtoLink'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 px-6 border-t border-light-accent scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Let&apos;s connect
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-stone leading-relaxed mb-12">
          I&apos;m currently open to senior backend, platform, and AI systems
          opportunities. Feel free to reach out on LinkedIn or email, and I&apos;m
          happy to share more detailed project or resume context in a follow-up.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {socialLinks.map((link) => {
            const isExternal = link.url.startsWith('http')
            const iconEl = (
              <>
                {link.icon === 'github' && (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {link.icon === 'linkedin' && (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.647 1.175-1.57 2.86-1.57 2.089 0 3.653 1.36 3.653 4.286v5.563zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.947.771-1.703 1.96-1.703 1.188 0 1.914.756 1.938 1.703 0 .946-.75 1.704-1.983 1.704zm1.946 11.019H3.39V9.81h3.893v10.642zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                )}
              </>
            )

            return (
              <a
                key={link.name}
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={link.name}
                className="text-stone hover:text-terracotta transition-colors"
              >
                {iconEl}
              </a>
            )
          })}
          <MailtoLink
            aria-label="Email Jeffery Yu"
            className="text-stone hover:text-terracotta transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7l7 5.5a1 1 0 0 0 1.2 0L19.5 7" />
            </svg>
          </MailtoLink>
        </div>

        <p className="text-stone text-sm">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </motion.div>
    </footer>
  )
}
