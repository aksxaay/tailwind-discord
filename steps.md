## Step 1
Generate project with JavaScript Framework.

**React** - View - Angular - Svelte
we're using react yesssuh

install react package

install tailwind
`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`

install craco


replace the 
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
to craco
update your scripts in your package.json file to use craco instead of react-scripts for all scripts except eject:

create cracko config file..
`craco.config.js`

add tailwindcss and autoprefixer as PostCSS plugins


`npx tailwindcss-cli@latest init`
creates `tailwind.config.js` config at the root of the project

replace `./src/index.css`
with a couple things

and finally 
`npx start`
to get the project running.

also have to setup 
(Just In Time))
` mode:'jit',`
tailwind.config.js
Compiles CSS on the fly and makes build times much faster..

also purge unused css

```
purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './public/index.html'
  ]
```
Unused anything purged.
If this was getting deployed it would allow very small css file sizes.