// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          bg:{
            mocha:'#80beaf',
            lmocha:'#b3ddd1',
            grey:"#DIDCE2",
            lorange:"#f58994",
            orange:"#fd7525"
      
          }
        }
    },
  },
  plugins: [],
}
