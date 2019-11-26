import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// https://risanb.com/posts/bundling-your-javascript-library-with-rollup/
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'built.js'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};  