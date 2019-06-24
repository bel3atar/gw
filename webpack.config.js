module.exports = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            // plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        },
        'webpack-conditional-loader'
      ]
    }]
  },
  output: {
    library: 'gw'
  }
}
