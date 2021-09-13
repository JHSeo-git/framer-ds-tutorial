import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDeptExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.ts', '.tsx']

export default (args) => {
  const plugins = []
  let sourcemap = false

  console.log(`Running ${args.debug ? 'debug' : 'production'} build...`)

  if (!args.debug) {
    plugins.push(terser())
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
        preserveModules: true,
      },
    ],
    external: [/@babel\/runtime/],
    plugins: [
      peerDeptExternal(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      nodeResolve(),
      commonjs({
        extensions: [...extensions, '.js'],
      }),
      // ...plugins,
    ],
  }
}
