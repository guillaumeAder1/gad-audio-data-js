import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// https://risanb.com/posts/bundling-your-javascript-library-with-rollup/
// https://zellwk.com/blog/publish-to-npm/
// full lib project: https://github.com/alex996/react-css-spinners
const path = 'dist/lib';
const name = 'audioAnalayser';
export default {
  input: 'src/index.js',
  output: [{
    file:  `${path}/${name}.cjs.js`,
    format: 'cjs',
  }, {
    file: `${path}/${name}.esm.js`,
    format: 'esm'
  }, {
    file: `${path}/${name}.umd.js`,
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