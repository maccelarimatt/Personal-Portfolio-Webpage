/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: 'var(--asphalt)',
        street: 'var(--street)',
        rule: 'var(--rule)',
        steel: 'var(--steel)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        ash: 'var(--ash)',
        neon: 'var(--neon)',
        lantern: 'var(--lantern)',
      },
      fontFamily: {
        display: ['"League Gothic"', '"Arial Narrow"', 'sans-serif'],
        sans: ['"Sofia Sans"', 'system-ui', 'sans-serif'],
        label: ['"Sofia Sans Condensed"', '"Sofia Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        measure: '68ch',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', md: '2rem' },
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
};
