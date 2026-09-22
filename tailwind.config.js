/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
          strong: 'var(--color-accent-strong)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(56, 189, 248, 0.25)',
        card: '0 10px 30px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.25), transparent 25%), radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.25), transparent 25%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
      },
      borderRadius: {
        glass: '18px',
      },
      dropShadow: {
        glow: '0 8px 20px rgba(56, 189, 248, 0.45)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1180px',
        },
      },
    },
  },
  plugins: [],
};
