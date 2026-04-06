'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.JPG')", backgroundPosition: 'center 35%' }}
        aria-hidden="true"
      />
      {/* Gradient overlay — cream left for text legibility, fading to reveal ocean right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(245,240,235,0.96) 0%, rgba(245,240,235,0.88) 45%, rgba(245,240,235,0.45) 75%, rgba(245,240,235,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl font-bold text-charcoal mb-8 tracking-tight"
        >
          Jeffery Yu
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-2xl md:text-3xl text-charcoal font-medium leading-tight mb-5"
        >
          Backend and platform engineer focused on reliable systems,
          distributed infrastructure, and the platforms behind AI products.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base md:text-lg text-stone leading-relaxed mb-10"
        >
          Over the past decade I&apos;ve worked across Oracle, Splunk, and HTC,
          building cloud infrastructure, backend APIs, developer tooling, and
          systems foundations that scale.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start gap-3 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-charcoal border border-transparent px-7 py-3 text-sm font-semibold text-cream hover:bg-terracotta transition-colors w-full sm:w-auto sm:min-w-[160px]"
          >
            Selected work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-stone/40 px-7 py-3 text-sm font-semibold text-charcoal hover:border-terracotta hover:text-terracotta transition-colors w-full sm:w-auto sm:min-w-[160px]"
          >
            Contact me
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}
