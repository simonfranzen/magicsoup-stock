const path = require('path')
const pkg = require('./package.json')

const libraryName = pkg.name

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  target: 'web',
  mode: 'production',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'commonjs2',
    publicPath: '/dist/',
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        include: path.resolve(__dirname, "src"),
        exclude: [/node_modules/, /coverage/, /lib/, /public/, /dist/],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
      'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
    },
  },
  externals: {
    // Don't bundle react, react-dom, styled-system or styled-components
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'styled-system': {
      commonjs: 'styled-system',
      commonjs2: 'styled-system',
      amd: 'styled-system',
      root: 'styled-system',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled-components',
    },
  },
}