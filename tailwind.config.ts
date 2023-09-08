import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        "144": "48rem",
        "160": "52rem",
        "panel": "36rem"
      },
      colors: {
        "primary": "#194872",
        "secondary": "#F8BDB4",
        "alternate": "#ACACAC",
        "accent": "#622B41",
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in'
      },

      keyframes: theme=>({
        'fadeIn': {
          "0%": {backgroundColor: 'transparent'},
          "100%": {backgroundColor: 'black'} 
        },
      }),
    },

  },
  plugins: [],
}
export default config
