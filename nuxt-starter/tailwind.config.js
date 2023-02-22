/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
    color: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      whitegray: '#F8F9FC',
      warmgray: '#F1F2F4',
      frostgray: '#E9ECF4',
      palegray: '#D7DAE3',
      silver: '#BFBFD0',
      mediumgray: '#ABAEBC',
      coolgray: '#8B8BA0',
      sonicgray: '#6D6F79',
      onyx: '#424242',
      jet: '#333333',
    },
  },
  plugins: [],
};
