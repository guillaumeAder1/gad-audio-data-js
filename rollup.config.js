import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// https://risanb.com/posts/bundling-your-javascript-library-with-rollup/
// https://zellwk.com/blog/publish-to-npm/
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/bundle.js',
    format: 'cjs',
  }, {
    file: 'public/dist/bundle.js',
    format: 'umd',
    name: 'lib'
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