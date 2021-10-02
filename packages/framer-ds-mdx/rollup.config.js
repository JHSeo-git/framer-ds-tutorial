import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDeptExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'

const extensions = ['.ts', '.tsx']

export default (args) => {
  let sourcemap = false

  console.log(`Running ${args.debug ? 'debug' : 'production'} build...`)

  if (!args.debug) {
    sourcemap = true
  }

  delete args.debug

  return {
    input: pkg.source,
    output: [
      {
        file: pkg.module,
        sourcemap,
        format: 'esm',
        exports: 'auto',
      },
      {
        dir: './dist/cjs',
        sourcemap,
        format: 'cjs',
        exports: 'auto',
      },
    ],
    external: [/@babel\/runtime/],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      peerDeptExternal(),
      nodeResolve(),
      commonjs({
        extensions: [...extensions, '.js'],
      }),
      terser(),
      visualizer({
        filename: './dist-visualizer/stats.html',
      }),
    ],
  }
}
