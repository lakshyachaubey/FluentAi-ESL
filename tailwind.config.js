/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFFFF',
        ink: '#3C3C3C',
        duo: {
          green: '#58CC02',
          greendark: '#58A700',
          greenlight: '#D7FFB8',
          yellow: '#FFC800',
          yellowdark: '#E0A800',
          blue: '#1CB0F6',
          bluedark: '#1899D6',
          bluelight: '#DDF4FF',
          red: '#FF4B4B',
          reddark: '#D33131',
          redlight: '#FFDFE0',
          gray: '#E5E5E5',
          graydark: '#AFAFAF',
          textgray: '#777777',
          bg: '#F7F7F7',
        },
        moss: {
          50: '#EAFBCC',
          100: '#D7FFB8',
          500: '#58CC02',
          600: '#58CC02',
          700: '#46A302',
        },
        honey: '#FFC800',
        flame: '#FF9600',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 0 rgba(0,0,0,.04)',
        lift: '0 4px 0 #58A700',
      },
    },
  },
  plugins: [],
}
