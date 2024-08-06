const path = require('path')

module.exports = {
    // webpack 
    webpack: {
      alias: {
        //  @ : current root path + src
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
  