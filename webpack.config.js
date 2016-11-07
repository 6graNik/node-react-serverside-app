const config = {
    context: __dirname,
    name: 'browser',
    target: 'web',
    entry: "./src/routes/main.jsx",
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel', // 'babel-loader' is also a valid name to reference
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    watch: true
};

export default config;
