// craco.config.js
/*
add the tailwindcss and autoprefixer as PostCSS plugins:
*/
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}