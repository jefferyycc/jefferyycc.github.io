'use client'

import { useEffect, useState } from 'react'

interface MailtoLinkProps {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * Assembles the mailto: href only on the client after hydration.
 * The email never appears in the static HTML — only rendered JS output.
 * Scrapers parsing raw HTML get an empty href="#".
 */
export default function MailtoLink({ className, children, 'aria-label': ariaLabel }: MailtoLinkProps) {
  const [href, setHref] = useState('#')

  useEffect(() => {
    // Assembled client-side only — never in static HTML or easily grep-able
    const p = [106,101,102,102,46,99,99,121,117]
    const d = [103,109,97,105,108,46,99,111,109]
    const u = p.map(c => String.fromCharCode(c)).join('')
    const h = d.map(c => String.fromCharCode(c)).join('')
    setHref(`mailto:${u}@${h}`)
  }, [])

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  )
}
