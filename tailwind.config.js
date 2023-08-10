/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shape': 'linear-gradient(to bottom, #1f1e1e, #272626, #302f2f, #393838, #424141)',
        'gradient-shape-light': 'linear-gradient(to bottom, #1f1e1e, #272626, #302f2f, #393838, #424141)'
      },
      backgroundColor: {
        'bg-shape': 'linear-gradient(to bottom, #1f1e1e, #272626, #302f2f, #393838, #424141)'
      },
      fontFamily: {
        liberationRegular: 'LiberationSans-Regular',
        liberationBold: 'LiberationSans-Bold',
        liberationItalic: 'LiberationSans-Italic',
        liberationBoldItalic: 'LiberationSans-BoldItalic'
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [
    require('tailwindcss-animate')
  ]
}
