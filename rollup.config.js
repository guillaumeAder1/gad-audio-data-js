import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// https://risanb.com/posts/bundling-your-javascript-library-with-rollup/
// https://zellwk.com/blog/publish-to-npm/
// hot reload : https://lengstorf.com/learn-rollup-css/
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/bundle.js',
    format: 'cjs',
  }, {
    file: 'public/dist/bundle.js',
    format: 'umd',
    name: 'AudioAnalyser'
  }],
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};  