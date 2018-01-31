const path = require('path')

module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    }    
}