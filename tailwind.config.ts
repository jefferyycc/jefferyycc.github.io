import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5F0EB',
        'charcoal': '#2C2825',
        'terracotta': '#C4704B',
        'stone': '#695D57',
        'light-accent': '#E8DDD3',
      },
      fontFamily: {
        'sans': ['var(--font-sans)', 'sans-serif'],
        'serif': ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
