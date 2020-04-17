module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    flex: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
