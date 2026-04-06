import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const metadata: Metadata = {
  title: 'Jeffery Yu | Senior Backend Engineer',
  description:
    'Jeffery Yu — senior backend engineer with 10+ years building cloud infrastructure, platform tooling, and AI-powered workflows at Oracle, Splunk, and HTC.',
  metadataBase: new URL('https://jefferyycc.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jeffery Yu | Senior Backend Engineer',
    description:
      'Senior backend engineer with 10+ years building cloud infrastructure, platform tooling, and AI-powered workflows at Oracle, Splunk, and HTC.',
    url: 'https://jefferyycc.github.io',
    siteName: 'Jeffery Yu',
    type: 'website',
    images: [
      {
        url: '/hero-bg.JPG',
        width: 1200,
        height: 630,
        alt: 'Jeffery Yu portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeffery Yu | Senior Backend Engineer',
    description:
      'Senior backend engineer with 10+ years building cloud infrastructure, platform tooling, and AI-powered workflows at Oracle, Splunk, and HTC.',
    images: ['/hero-bg.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    // Block AI training crawlers that respect this directive
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
  other: {
    // Opt out of AI training datasets (supported by some crawlers)
    'robots': 'noai, noimageai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lora.variable}`}>
      <head>
        {gaMeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-cream text-charcoal">
        {children}
      </body>
    </html>
  )
}
