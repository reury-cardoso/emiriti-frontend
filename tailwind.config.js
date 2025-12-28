/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores Primárias
        amazonia: {
          DEFAULT: '#00A86B',
          hover: '#2ECC71',
          shadow: '#008F5D',
          light: '#F0FFF4',
        },
        miriti: {
          DEFAULT: '#FF6B35',
          gradient: '#FFB84D',
          light: '#FFF5F0',
        },
        // Neutros
        background: '#FAFBFC',
        card: '#FFFFFF',
        text: {
          primary: '#1A202C',
          secondary: '#718096',
        },
        border: '#E2E8F0',
        // Utilitários
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        secondary: ['Merriweather Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1.4', letterSpacing: '0' }],
        sm: ['13px', { lineHeight: '1.5', letterSpacing: '0' }],
        base: ['15px', { lineHeight: '1.6', letterSpacing: '0' }],
        lg: ['16px', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        xl: ['18px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['22px', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['28px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        float: '0 12px 40px rgba(0,0,0,0.12)',
        amazonia: '0 4px 12px rgba(0,168,107,0.15)',
        miriti: '0 4px 12px rgba(255,107,53,0.15)',
        top: '0 -2px 12px rgba(0,0,0,0.08)',
      },
      spacing: {
        18: '4.5rem',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        shimmer: 'shimmer 1.5s linear infinite',
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
        'scale-up': 'scaleUp 150ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
