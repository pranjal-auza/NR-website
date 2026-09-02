/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-primary-background)',
        foreground: 'var(--color-primary-foreground)',
        surface: 'var(--color-surface)',
        'surface-subtle': 'var(--color-surface-subtle)',
        'secondary-bg': 'var(--color-secondary-background)',
        'secondary-fg': 'var(--color-secondary-foreground)',
        'tertiary-fg': 'var(--color-tertiary-foreground)',
        'caption-fg': 'var(--color-caption-foreground)',
        'subtle-stroke': 'var(--color-subtle-stroke)',
        'weak-stroke': 'var(--color-weak-stroke)',
        'default-stroke': 'var(--color-default-stroke)',
        'strong-stroke': 'var(--color-strong-stroke)',
        'accent-stroke': 'var(--color-accent-stroke)',
        
        // Brand & Accent Colors
        brand: {
          50: 'var(--color-blue-100)',
          100: 'var(--color-blue-200)',
          200: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-450)',
          600: 'var(--color-blue-500)',
          700: 'var(--color-blue-600)',
          800: 'var(--color-blue-800)',
        },
        
        // GrowthBook Colors
        gb: {
          purple: '#6E56CF',
          'purple-hover': '#5643B8',
          'purple-light': '#F6F2FD',
          'purple-tint': '#F1F0FC',
          navy: '#151E3D',
          'navy-dark': '#0F172A',
          'navy-deep': '#0A0914',
          'gray-bg': '#FAFAFA',
          'gray-border': '#EEEEF2',
          'gray-text': '#494966',
          'gray-subtle': '#62627A',
        },
        
        // Raw primitives mapped
        gray: {
          950: '#060709',
          900: '#0d0f12',
          850: '#13161b',
          800: '#1a1e24',
          750: '#222730',
          700: '#2c333e',
          600: '#414b5a',
          500: '#5c6779',
          400: '#8491a5',
          300: '#b4becc',
          200: '#dbe1ea',
          100: '#f1f4f8',
          50: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter Display"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
      },
      boxShadow: {
        'attio-1': 'var(--shadow-attio-layer-1)',
        'attio-2': 'var(--shadow-attio-layer-2)',
        'attio-3': 'var(--shadow-attio-layer-3)',
        'attio-4': 'var(--shadow-attio-layer-4)',
        'attio-5': 'var(--shadow-attio-layer-5)',
        'attio-6': 'var(--shadow-attio-layer-6)',
        'attio-7': 'var(--shadow-attio-layer-7)',
        'glow-brand': '0 0 50px -10px rgba(47, 104, 253, 0.3)',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s var(--ease-out-cubic) forwards',
        'scale-in': 'scaleIn 0.4s var(--ease-out-cubic) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};
