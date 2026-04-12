/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ef4444',
          dark: '#0b0b0d',
          black: '#000000',
          white: '#f5f5f7'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono Variable"', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.35)'
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '30ch' }
        },
        caret: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0px rgba(239,68,68,0.0)' },
          '50%': { boxShadow: '0 0 25px rgba(239,68,68,0.35)' },
          '100%': { boxShadow: '0 0 0px rgba(239,68,68,0.0)' }
        }
      },
      animation: {
        typing: 'typing 3s steps(30), caret 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite'
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
