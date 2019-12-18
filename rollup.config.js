import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
// https://risanb.com/posts/bundling-your-javascript-library-with-rollup/
// https://zellwk.com/blog/publish-to-npm/
// full lib project: https://github.com/alex996/react-css-spinners
// rollup and polyfill: https://github.com/rollup/rollup/issues/2474
const path = 'dist/lib'
const name = 'AudioTool'
const bundle = 'bundle'

export default {
  input: 'src/index.js',
  output: [{
    file: `${path}/${bundle}.cjs.js`,
    format: 'cjs'
  }, {
    file: `${path}/${bundle}.esm.js`,
    format: 'esm'
  }, {
    file: `${path}/${bundle}.umd.js`,
    format: 'umd',
    name: name
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
}
